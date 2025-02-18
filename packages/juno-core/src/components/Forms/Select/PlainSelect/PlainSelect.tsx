import React, { forwardRef, useMemo, useState } from 'react';

import { useControlled } from '@material-ui/core';
import { PopoverOrigin } from '@material-ui/core/Popover';

import {
  combineProps,
  hasValue,
  logInDev,
  RcBaseProps,
  styled,
} from '../../../../foundation';
import { RcButton, RcButtonProps } from '../../../Buttons';
import { RcMenu } from '../../../Menu';
import { RcVirtualizedMenu } from '../../../VirtualizedMenu';
import { RcSelect, RcSelectProps } from '../Select';
import { SelectArrowDownIcon } from '../styles';
import { plainSelectStyle } from './styles';
import {
  RcPlainSelectInputClasses,
  RcPlainSelectTouchRippleClasses,
  switchVariantToButtonVariant,
  UnionButtonVariant,
} from './utils';

type RcPlainSelectPropsVariant = 'round' | 'plainIcon' | UnionButtonVariant;

type RcPlainSelectProps = {
  /** value of this component, required in PlainSelect */
  value: unknown;
  /** type of variant, default is `text` */
  variant?: RcPlainSelectPropsVariant;
  /** Button Props */
  ButtonProps?: RcButtonProps;
  /** item for the select options */
  children: JSX.Element[];
} & RcBaseProps<
  RcSelectProps,
  'variant' | 'multiple' | 'error' | 'placeholder'
>;

const defaultButtonProps: RcButtonProps = {
  TouchRippleProps: { classes: RcPlainSelectTouchRippleClasses },
};

const EmptyIcon = () => null;

const displayName = 'RcPlainSelect';

const plainAnchorOrigin: PopoverOrigin = {
  horizontal: 'left',
  vertical: 'bottom',
};

const _RcPlainSelect = forwardRef<any, RcPlainSelectProps>(
  (
    {
      children,
      className,
      classes,
      value: valueProp,
      defaultValue,
      renderValue,
      variant,
      ButtonProps,
      innerRef,
      SelectInputProps,
      InputProps,
      disabled,
      autoFocus,
      size,
      virtualize,
      fullWidth,
      color,
      //
      IconComponent,
      onOpen: onOpenProp,
      onClose: onCloseProp,
      onChange: onChangeProp,
      ...rest
    },
    ref,
  ) => {
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: displayName,
    });

    const [open, setOpen] = useState(false);
    const isEmpty = !hasValue(value);

    if (process.env.NODE_ENV !== 'production' && isEmpty) {
      logInDev({
        component: displayName,
        message: '[Juno]: Plain Select must have init value',
        level: 'error',
      });
    }

    const display = useMemo(() => {
      const item = children.find((child) => {
        return child.props['value'] === value;
      });

      return item?.props['children'];
    }, [children, value]);

    const _renderValue = (newValue: any) => {
      const _variant = switchVariantToButtonVariant(variant!);

      return (
        <RcButton
          ref={ref}
          innerRef={innerRef}
          disabled={disabled}
          size={size}
          color={color}
          fullWidth={fullWidth}
          autoFocus={autoFocus}
          variant={_variant}
          aria-label="open menu"
          aria-haspopup="listbox"
          {...combineProps(defaultButtonProps, ButtonProps)}
        >
          {renderValue ? renderValue(newValue) : display}
          {(IconComponent && <IconComponent open={open} />) || (
            <SelectArrowDownIcon
              // * reset default color
              color={undefined}
              // *for reverse button
              className={open ? 'MuiSelect-iconOpen' : ''}
            />
          )}
        </RcButton>
      );
    };

    const _SelectInputProps = useMemo<RcSelectProps['SelectInputProps']>(() => {
      return combineProps(
        {
          MenuComponent: virtualize ? RcVirtualizedMenu : RcMenu,
          MenuProps: {
            anchorOrigin: plainAnchorOrigin,
          },
          SelectDisplayProps: {
            // * clean default select tabIndex set,
            // * use our custom button render to trigger default event
            tabIndex: undefined,
            'aria-haspopup': undefined,
            role: undefined,
          },
        },
        SelectInputProps,
      );
    }, [SelectInputProps, virtualize]);

    const _InputProps = useMemo<RcSelectProps['InputProps']>(() => {
      return combineProps(
        {
          classes: RcPlainSelectInputClasses,
          disableUnderline: true,
        },
        InputProps,
      );
    }, [InputProps]);

    return (
      <RcSelect
        className={className}
        value={value}
        // * set any for select could not find any class
        variant={'none' as any}
        disabled={disabled}
        IconComponent={EmptyIcon}
        onOpen={(e) => {
          setOpen(true);
          onOpenProp?.(e);
        }}
        onClose={(e) => {
          setOpen(false);
          onCloseProp?.(e);
        }}
        onChange={(e, v) => {
          setValue(e.target.value);
          onChangeProp?.(e, v);
        }}
        SelectInputProps={_SelectInputProps}
        InputProps={_InputProps}
        renderValue={_renderValue}
        fullWidth={fullWidth}
        color={color}
        {...rest}
      >
        {children}
      </RcSelect>
    );
  },
);

/** @release */
const RcPlainSelect = styled(_RcPlainSelect)`
  ${plainSelectStyle}
`;

RcPlainSelect.defaultProps = {
  variant: 'text',
  size: 'medium',
};

RcPlainSelect.displayName = displayName;

export { RcPlainSelect };
export type { RcPlainSelectProps, RcPlainSelectPropsVariant };
