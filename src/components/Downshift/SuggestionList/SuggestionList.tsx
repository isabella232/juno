import clsx from 'clsx';
import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import {
  combineClasses,
  combineProps,
  omit,
  RcBaseProps,
  RcClassesProps,
  styled,
  useForkRef,
  usePrevious,
  useRetry,
  useSleep,
  useThemeProps,
} from '../../../foundation';
import ArrowDown2 from '../../../icon/ArrowDown2';
import { RcBox } from '../../Box';
import { RcIconButton } from '../../Buttons/IconButton';
import { RcMenuItem } from '../../Menu/MenuItem';
import { StyledMenuListPadding } from '../../VirtualizedMenu/styles';
import {
  IndexLocationWithAlign,
  useDynamicHeight,
  useHighlightScroll,
  Virtuoso,
  VirtuosoHandle,
  Components,
  VirtuosoProps,
} from '../../Virtuoso';
import { RcDownshiftProps } from '../Downshift';
import {
  RcDownshiftGetItemPropsOptions,
  RcDownshiftHighlightChangeReason,
  RcDownshiftSelectedItem,
} from '../utils';
import { SuggestionListStyle } from './styles';
import { RcSuggestionListClasses } from './utils';

export type RcSuggestionListProps<T> = RcBaseProps<
  Partial<VirtuosoProps<T>>,
  'totalCount' | 'itemContent' | 'data'
> & {
  /**
   * that virtual list container height,
   *
   * @default 100%
   */
  maxContainerHeight?: number | '100%';
  /**
   * vertical padding from the list
   *
   * @default false
   */
  padding?: boolean | number;
} & RcClassesProps<'root' | 'toggle' | 'expanded'>;

export type InnerSuggestionListProps = {
  /** current highlightedIndex */
  highlightedIndex: number;
  /** select options */
  options: RcDownshiftSelectedItem[];
  /** each item props getter */
  getItemProps: (
    options: RcDownshiftGetItemPropsOptions<RcDownshiftSelectedItem>,
  ) => any;
  /** menu wrapper props getter */
  getMenuProps: (
    restMenuProps?: HTMLAttributes<HTMLElement> | undefined,
  ) => HTMLAttributes<HTMLElement>;
  /** that reason that change highlighted */
  changeHighlightedIndexReason: RcDownshiftHighlightChangeReason | undefined;
  /** is that need keep highlighted index, that will be helpful when you need load more options when scroll */
  isKeepHighlightedIndex: boolean;
  /** trigger when need update outside popper position */
  onUpdatePopper?: () => any;
} & Pick<
  RcDownshiftProps,
  | 'inputValue'
  | 'MenuItem'
  | 'renderOption'
  | 'getOptionDisabled'
  | 'renderGroup'
  | 'groupBy'
  | 'getOptionLabel'
> &
  RcSuggestionListProps<any>;

const SuggestionListContext = createContext<React.RefObject<HTMLElement>>(
  null as any,
);

const List = forwardRef<any, any>((props, ref) => {
  const listRef = useContext(SuggestionListContext);

  const forkRef = useForkRef(ref, listRef);

  return <div ref={forkRef} data-suggestion-list {...props} />;
});

const SuggestionList = forwardRef<any, InnerSuggestionListProps>(
  (inProps: InnerSuggestionListProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSuggestionList' });
    const {
      highlightedIndex,
      options,
      getItemProps,
      getMenuProps,
      renderOption,
      inputValue,
      groupBy,
      renderGroup,
      getOptionDisabled,
      MenuItem,
      changeHighlightedIndexReason,
      isKeepHighlightedIndex,
      components: componentsProp,
      onUpdatePopper,
      getOptionLabel,
      padding,
      maxContainerHeight = '100%',
      className: classNameProp,
      classes: classesProp,
      ...rest
    } = props;

    const vlRef = useRef<VirtuosoHandle>(null);
    const forkVlRef = useForkRef(ref, vlRef);

    const listRef = useRef<HTMLElement>(null);

    const itemData = options;
    const itemCount = options.length;

    const classes = combineClasses(RcSuggestionListClasses, classesProp);
    const className = clsx(classNameProp, classes?.root);

    const {
      totalListHeightChanged,
      style,
      containerHeighRef,
    } = useDynamicHeight({
      itemCount,
      maxContainerHeight,
      onContainerHeightChange: (changeHeight) => {
        const scroller = scrollerRef.current;
        if (scroller?.style) {
          scroller.style.height = `${changeHeight}px`;

          onUpdatePopper?.();
        }
      },
    });

    const { sleep } = useSleep();

    const { retry: scrollToIndexWithRetry } = useRetry(
      async (location: number | IndexLocationWithAlign) => {
        vlRef.current?.scrollToIndex(location);

        const toIndex =
          typeof location === 'number' ? location : location.index;

        await sleep(0);
        // confirm that scrollInto view
        const toElm = listRef.current?.querySelector<HTMLElement>(
          `[data-item-index="${toIndex}"]`,
        );

        if (toElm) {
          return true;
        }

        return false;
      },
      {
        retryTimes: 10,
        intervalTime: 20,
      },
    );

    const {
      scrollerRef,
      scrollerRefFn,
      itemsRendered,
      scrollToHighlightedIndex,
    } = useHighlightScroll({
      containerHeighRef,
      scrollToIndex: scrollToIndexWithRetry,
    });

    const prevHighlightedIndex = usePrevious(() => highlightedIndex, true);

    useLayoutEffect(() => {
      if (
        vlRef.current &&
        !isKeepHighlightedIndex &&
        // * only scroll when reason is 'keyboard'
        changeHighlightedIndexReason &&
        changeHighlightedIndexReason !== 'mouse'
      ) {
        scrollToHighlightedIndex(prevHighlightedIndex, highlightedIndex);
      }
    });

    const handleScrolling = (scrolling: boolean) => {
      const list = listRef.current;
      if (list && list.style) {
        if (scrolling) {
          list.style.pointerEvents = 'none';
        } else {
          list.style.pointerEvents = '';
        }
      }
    };

    const itemContent = (index: number, option: RcDownshiftSelectedItem) => {
      const isFirstGroupItem = option === option.group?.options[0];

      const expandIconProps = isFirstGroupItem
        ? option.group?.getExpandIconProps?.({
            className: clsx(classes.toggle, {
              [classes.expanded]: option.group?.expanded,
            }),
          })
        : undefined;

      const itemProps = getItemProps({
        item: option,
        index,
      });

      const selected = highlightedIndex === index;

      const resultProps = {
        ...option,
        ...itemProps,
        'aria-setsize': itemCount,
        'aria-posinset': index,
        key: itemProps.id,
      };

      // * when item is not disabled, that should check outside is that disabled
      if (!resultProps.freeSolo && !resultProps.disabled && getOptionDisabled) {
        resultProps.disabled = getOptionDisabled(option);
      }

      const state = {
        inputValue,
        selected,
        index,
      };

      if (renderGroup && expandIconProps) {
        return renderGroup(resultProps, {
          ...state,
          expanded: option.group?.expanded,
          expandIconProps,
        });
      }

      if (renderOption) {
        // * as any for VirtualizedListWithAutoSizer type issue
        return renderOption(resultProps, state) as any;
      }

      // TODO: that MenuItem will be remove
      if (MenuItem) {
        return (
          <MenuItem
            {...resultProps}
            itemId={option.id}
            data-suggestion-item-id={option.id}
            isHighlighted={selected}
            isMember={option.isMember}
          />
        );
      }

      return (
        <RcMenuItem
          component="div"
          selected={selected}
          {...omit(resultProps, [
            'isSuggestion',
            'freeSolo',
            'label',
            'unSelectable',
          ])}
        >
          {getOptionLabel ? getOptionLabel(option) : option.label}
          <RcBox flex="1 1 auto" />
          {expandIconProps && (
            <RcIconButton {...expandIconProps} symbol={ArrowDown2} />
          )}
        </RcMenuItem>
      );
    };

    const PaddingComponent = useMemo(() => {
      return padding !== undefined
        ? typeof padding === 'number'
          ? () => <StyledMenuListPadding height={padding} />
          : StyledMenuListPadding
        : undefined;
    }, [padding]);

    const components = useMemo<Components>(() => {
      return {
        List,
        Header: PaddingComponent,
        Footer: PaddingComponent,
        ...componentsProp,
      };
    }, [componentsProp, PaddingComponent]);

    return (
      <SuggestionListContext.Provider value={listRef}>
        <Virtuoso
          ref={forkVlRef}
          totalCount={itemCount}
          data={itemData}
          className={className}
          components={components}
          itemContent={itemContent}
          {...(getMenuProps() as any)}
          {...combineProps(
            {
              scrollerRef: scrollerRefFn,
              itemsRendered,
              totalListHeightChanged,
              style,
              isScrolling: handleScrolling,
            },
            rest,
          )}
        />
      </SuggestionListContext.Provider>
    );
  },
);

export const RcSuggestionList = styled(SuggestionList)`
  ${SuggestionListStyle};
`;

RcSuggestionList.displayName = 'RcSuggestionList';