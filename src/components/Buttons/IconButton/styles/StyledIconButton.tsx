import {
  backgroundTransition,
  css,
  darken,
  focusVisible,
  focusVisibleColor,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  paletteContrastText,
  px,
  radius,
  RcTheme,
  RcThemedStyled,
  setOpacity,
  shadows,
} from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { RcIconButtonProps, RcIconButtonVariant } from '../IconButton';
import {
  RcIconButtonClasses,
  RcIconButtonFocusVisibleInsetSize,
  RcIconButtonSizes,
  RcIconButtonTouchRippleClasses,
} from '../utils';

export const getFocusVisibleInsetSize: RcThemedStyled<
  RcIconButtonProps,
  any
> = ({ size }) => {
  const inset = RcIconButtonFocusVisibleInsetSize[size!];
  return css`
    top: -${inset}px;
    right: -${inset}px;
    bottom: -${inset}px;
    left: -${inset}px;
  `;
};

const containedVariantTransitions: RcThemedStyled<
  RcIconButtonProps,
  string
> = ({ theme }) =>
  theme.transitions.create(['background-color', 'box-shadow', 'border'], {
    duration: theme.transitions.duration.short,
  });

type PlainIconButtonFocusStyleOption = {
  radius?: keyof RcTheme['radius'];
};

export const plainIconButtonFocusStyle = ({
  radius: radiusProp = 'circle',
}: PlainIconButtonFocusStyleOption = {}) => css`
  &:after {
    content: '';
    position: absolute;
    ${getFocusVisibleInsetSize};
    box-shadow: 0 0 0 1px ${focusVisibleColor};
    border-radius: ${radius(radiusProp)};
    pointer-events: none;
    z-index: 1;
  }
`;

export const iconButtonStyle: RcThemedStyled<RcIconButtonProps, any> = ({
  variant,
  size,
  stretchIcon,
  color,
  disabled,
  useColorWhenDisabled,
  shouldPersistBg,
  radius: radiusProp,
  elevation,
  activeElevation,
}) => {
  const iconSize = RcIconButtonSizes[size!];

  const isCircle = ([
    'plain',
    'round',
    'inverse',
    'contained',
  ] as RcIconButtonVariant[]).includes(variant!);
  const isPlain = variant === 'plain';
  const isInverse = variant === 'inverse';
  const isOutline = variant === 'outline';
  const isContained = variant === 'contained';

  const containerSize = px(isPlain ? iconSize : iconSize * 2);

  const mainColor = getParsePaletteColor(color);
  const mainColorContrast = paletteContrastText(mainColor);

  const currRadius =
    radiusProp || (isOutline ? 'lg' : isCircle ? 'circle' : 'zero');

  const containedInactiveStyled = css`
    background-color: ${darken(mainColor, 0.1)};

    ${RcIcon} {
      color: ${mainColorContrast};
    }
  `;

  const persistBgColor = setOpacity(
    mainColor,
    isInverse ? '80' : '12',
    isInverse,
  );

  const defaultShadow = isContained ? shadows('1') : undefined;

  const nowShadow =
    elevation !== undefined ? shadows(elevation) : defaultShadow;

  return css`
    &.${RcIconButtonClasses.root} {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      width: ${containerSize};
      height: ${containerSize};
      color: ${mainColor};
      border-radius: ${radius(currRadius)};
      transition: ${backgroundTransition};
      cursor: ${disabled ? 'default' : 'pointer'};

      background-color: ${(shouldPersistBg || isInverse) && persistBgColor};

      font-size: ${stretchIcon && containerSize};

      box-shadow: ${nowShadow};

      ${nowShadow &&
        css`
          transition: ${containedVariantTransitions};

          &:active {
            box-shadow: ${shadows(
              activeElevation ??
                (elevation ? Math.min(+(elevation as any) + 11, 24) : '12'),
            )};
          }
        `}

      ${RcIcon} {
        font-size: ${stretchIcon
          ? containerSize
          : px(
              isOutline
                ? iconSize * 1.2 // keep size same as before
                : iconSize,
            )};
      }

      ${nonTouchHoverMedia} {
        &:hover {
          background-color: ${isPlain
            ? 'transparent'
            : setOpacity(mainColor, isInverse ? '40' : '08')};

          ${RcIcon} {
            color: ${setOpacity(mainColor, '88')};
          }
        }
      }

      &:active {
        ${RcIcon} {
          color: ${mainColor};
        }
      }

      ${focusVisible} {
        background-color: ${isPlain
          ? 'transparent'
          : setOpacity(mainColor, isInverse ? '40' : '16')};

        &:active {
          ${RcIcon} {
            color: ${setOpacity(mainColor, '88')};
          }
        }

        ${isPlain && plainIconButtonFocusStyle({ radius: currRadius })};
      }
    }

    &.${RcIconButtonClasses.persistBg} {
      background-color: ${persistBgColor};
    }

    &.${RcIconButtonClasses.disabled} {
      ${RcIcon} {
        color: ${useColorWhenDisabled
          ? setOpacity(mainColor, '32')
          : palette2('disabled', 'f02')};
      }

      background-color: ${isInverse && setOpacity(mainColor, '12')};
    }

    &.${RcIconButtonClasses.invisible} {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    &.${RcIconButtonClasses.outline} {
      border: 1px solid ${palette2('neutral', 'l03')};
    }

    &.${RcIconButtonClasses.contained} {
      color: ${mainColorContrast};
      background-color: ${mainColor};

      ${nonTouchHoverMedia} {
        &:hover {
          ${containedInactiveStyled};
        }
      }

      &:active {
        ${containedInactiveStyled};
      }

      ${focusVisible} {
        background-color: ${darken(mainColor, 0.1)};

        &:active {
          ${RcIcon} {
            color: ${mainColorContrast};
          }
        }
      }
    }

    .${RcIconButtonTouchRippleClasses.ripplePulsate} {
      border-radius: 0;
      animation-name: none;
      opacity: 0;
    }

    ${/**
     * that is equilateral triangle, the third Side length is
     * Math.sqrt(2) = 1.414213562373095, so we scale that
     * to make that full with this square
     */
    !isPlain &&
      !(['circle', 'round'] as RcIconButtonProps['radius'][]).includes(
        currRadius,
      ) &&
      css`
        .${RcIconButtonTouchRippleClasses.child} {
          transform: scale(1.41421357);
        }
      `}
  `;
};