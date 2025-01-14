import React, {
  ComponentProps,
  forwardRef,
  ReactElement,
  useMemo,
} from 'react';

import clsx from 'clsx';

import MuiChip from '@material-ui/core/Chip';
import { DeleteCircle } from '@ringcentral/juno-icon';

import {
  combineClasses,
  isRcElement,
  omit,
  RcBaseProps,
  RcClassesProps,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcAvatarProps } from '../Avatar';
import { RcIconButton, RcIconButtonProps } from '../Buttons/IconButton';
import { WithTooltipProps } from '../Tooltip';
import { ChipStyle } from './styles';
import { RcChipClasses } from './utils';

type RcChipClassProp = RcClassesProps<'focused'>;

type RcChipProps = {
  /** color palette set, effect that active color when focus */
  color?: RcPaletteProp;
  /** is that error chip */
  error?: boolean;
  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused?: boolean;
  /** props apply on `deleteIcon` */
  deleteIconProps?: RcIconButtonProps & WithTooltipProps;
  /** @deprecated should use `avatar` */
  Avatar?: ReactElement<RcAvatarProps>;
  /** @deprecated should use deleteIconProps with `data-test-automation-id` */
  deleteAutomationId?: string;
  /** @deprecated should use deleteIconProps with `title` */
  deleteTooltip?: string;
  /** @deprecated should use `error` */
  isError?: boolean;
} & RcBaseProps<
  ComponentProps<typeof MuiChip>,
  'color' | 'size' | 'variant' | 'icon'
> &
  RcChipClassProp;

const _RcChip = forwardRef<any, RcChipProps>((inProps: RcChipProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcChip' });
  const {
    Avatar: AvatarProp,
    deleteTooltip,
    deleteAutomationId,
    isError,
    classes: classesProp,
    avatar: avatarProp = AvatarProp,
    error = isError,
    id,
    label,
    disabled,
    deleteIcon: deleteIconProp,
    deleteIconProps,
    tabIndex,
    focused,
    color,
    className,
    ...rest
  } = props;
  const combinedClasses = useMemo(
    () => combineClasses(RcChipClasses, classesProp),
    [classesProp],
  );

  const classes = useMemo(
    () => omit(combinedClasses, ['focused']),
    [combinedClasses],
  );

  const deleteIcon = useMemo(() => {
    return deleteIconProp ? (
      React.cloneElement(deleteIconProp, {
        tabIndex: -1,
        ...deleteIconProps,
      })
    ) : (
      <RcIconButton
        tabIndex={-1}
        disabled={disabled}
        variant="plain"
        size="medium"
        title={deleteTooltip}
        color={error ? 'danger.f02' : undefined}
        data-test-automation-id={deleteAutomationId}
        symbol={DeleteCircle}
        {...deleteIconProps}
      />
    );
  }, [
    deleteIconProp,
    deleteIconProps,
    disabled,
    deleteTooltip,
    error,
    deleteAutomationId,
  ]);

  const avatar = useMemo(() => {
    if (avatarProp) {
      if (
        React.isValidElement(avatarProp) &&
        isRcElement<RcAvatarProps>(avatarProp, ['RcAvatar']) &&
        // * if that size is equal to default size medium
        // * that mean user not want to custom that
        avatarProp.props.size === 'medium'
      ) {
        return React.cloneElement(avatarProp, {
          size: 'xxsmall',
        });
      }

      return avatarProp;
    }
    return undefined;
  }, [avatarProp]);

  return (
    <MuiChip
      ref={ref}
      id={id}
      tabIndex={disabled ? -1 : tabIndex}
      label={label}
      disabled={disabled}
      classes={classes}
      className={clsx(className, focused ? combinedClasses.focused : undefined)}
      avatar={avatar}
      deleteIcon={deleteIcon}
      data-test-automation-class="selected-item"
      data-test-automation-value={id ? id : label}
      data-is-error={error}
      {...rest}
    />
  );
});

const RcChip = styled(_RcChip)`
  ${ChipStyle}
`;

RcChip.defaultProps = {
  tabIndex: 0,
  clickable: false,
};

RcChip.displayName = 'RcChip';

export { RcChip };
export type { RcChipProps };
