import React, { ComponentProps } from 'react';

import {
  RcBox,
  RcButton,
  RcButtonSize,
  RcButtonVariant,
  RcIcon,
  RcTypography,
  styled,
  useTheme,
} from '@ringcentral/juno';
import {
  BubbleLinesBorder,
  CallAdd,
  Leave,
  NewEmail,
  UserDefault,
} from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import { RcButtonHeights } from '../utils/ButtonUtils';

export default {
  title: '🚀 Cleanup Components/Buttons',
  component: RcButton,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof ButtonProps>([
      'variant',
      'size',
      'radius',
      'children',
      'title',
      'useRcTooltip',
      'loading',
      'loadingMode',
      'disabled',
      'fullWidth',
      'startIcon',
      'endIcon',
    ]),
    ...notControlInDocTable<keyof ButtonProps>([]),
    ...notShowInDocTable<keyof ButtonProps>(['IconProps']),
  },
} as Meta;

type ButtonProps = ComponentProps<typeof RcButton>;

export const Button: Story<ButtonProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return <RcButton {...args}>{children}</RcButton>;
};

Button.args = {
  children: 'button',
  title: 'button',
};

Button.argTypes = {
  ...notControlInDocTable<keyof ButtonProps>([]),
};

Button.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/7c0e8cc79e14b0cf155cb92b36c1dad5eb7803f1/files/667d44de-f29d-4d3a-857b-c8e2e7b59540/layers/16D99BD2-4BF8-483C-93D8-D6CE2B45B593?mode=design&sha=7c0e8cc79e14b0cf155cb92b36c1dad5eb7803f1',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/buttons/#button',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    list-style: none;
    display: flex;
    > * + * {
      margin-left: 1em;
    }
  }

  li + li {
    margin-top: 1em;
  }
`;

const variants = [
  'contained',
  'outlined',
  'text',
  'plain',
] as RcButtonVariant[];

const sizes = Object.keys(RcButtonHeights) as RcButtonSize[];

export const ButtonExamples: Story<ButtonProps> = ({ children, ...args }) => {
  return (
    <Wrapper>
      {variants.map((variant) => (
        <li key={variant}>
          <RcButton {...args} variant={variant}>
            {children}
          </RcButton>
          <RcButton
            {...args}
            variant={variant}
            startIcon={<RcIcon symbol={BubbleLinesBorder} />}
          >
            {children}
          </RcButton>
          <RcButton
            {...args}
            variant={variant}
            endIcon={<RcIcon symbol={BubbleLinesBorder} />}
          >
            {children}
          </RcButton>
          <RcButton
            {...args}
            variant={variant}
            startIcon={<RcIcon symbol={BubbleLinesBorder} />}
            endIcon={<RcIcon symbol={BubbleLinesBorder} />}
          >
            {children}
          </RcButton>
        </li>
      ))}
      <br />
      <br />
      <br />
      <Title variant="title1">All Size button</Title>
      <Wrapper>
        <li>
          {sizes.map((size) => {
            return (
              <RcBox key={size} display="inline-block">
                <Title variant="body1">{size}</Title>
                <RcButton {...args} size={size}>
                  {children}
                </RcButton>
                <br />
                <br />
                <RcButton
                  {...args}
                  size={size}
                  startIcon={<RcIcon symbol={CallAdd} />}
                >
                  {children}
                </RcButton>
                <br />
                <br />
                <RcButton
                  {...args}
                  size={size}
                  startIcon={<RcIcon symbol={CallAdd} />}
                >
                  Start a conversation
                </RcButton>
              </RcBox>
            );
          })}
        </li>
      </Wrapper>
    </Wrapper>
  );
};

ButtonExamples.args = {
  children: 'button',
  title: 'button',
};

ButtonExamples.argTypes = {
  ...notShowInDocTable<keyof ButtonProps>(['variant']),
};

export const ButtonVariants: Story<ButtonProps> = () => {
  return (
    <Wrapper>
      <li>
        <RcButton variant="text">click me</RcButton>
        <RcButton variant="outlined">click me</RcButton>
        <RcButton variant="contained">click me</RcButton>
        <RcButton variant="plain">click me</RcButton>
      </li>
    </Wrapper>
  );
};

export const ButtonSizes: Story<ButtonProps> = () => {
  return (
    <Wrapper>
      <li>
        {sizes.map((size) => {
          return (
            <RcBox key={size} display="inline-block">
              <Title variant="body1">{size}</Title>
              <RcButton size={size}>click</RcButton>
              <br />
              <br />
              <RcButton size={size} startIcon={<RcIcon symbol={CallAdd} />}>
                Start a conversation
              </RcButton>
            </RcBox>
          );
        })}
      </li>
    </Wrapper>
  );
};

export const ButtonWithLoading: Story<ButtonProps> = ({
  children,
  ...args
}) => {
  return (
    <Wrapper>
      {variants.map((variant) => (
        <li key={variant}>
          <div>
            <Title variant="body1">replace(default)</Title>
            <RcButton {...args} variant={variant}>
              click
            </RcButton>
          </div>
          <div>
            <Title variant="body1">prefix</Title>
            <RcButton {...args} variant={variant} loadingMode="prefix">
              click
            </RcButton>
          </div>
          <div>
            <Title variant="body1">suffix</Title>
            <RcButton {...args} variant={variant} loadingMode="suffix">
              click
            </RcButton>
          </div>
          <div>
            <Title variant="body1">with custom loading props</Title>
            <RcButton
              {...args}
              variant={variant}
              loadingMode="suffix"
              CircularProgressProps={{
                thickness: 10,
              }}
            >
              click
            </RcButton>
          </div>
        </li>
      ))}
    </Wrapper>
  );
};

ButtonWithLoading.args = {
  loading: true,
};

ButtonWithLoading.argTypes = {
  ...notControlInDocTable<keyof ButtonProps>(['variant']),
};

export const ButtonWithDisabled: Story<ButtonProps> = () => {
  return (
    <Wrapper>
      <li>
        <div>
          <Title variant="body1">Normal</Title>
          <RcButton disabled>button</RcButton>
        </div>
        <div>
          <Title variant="body1">Mask</Title>
          <RcButton disabled disabledVariant="mask">
            button
          </RcButton>
        </div>
      </li>
    </Wrapper>
  );
};

export const ButtonWithCustomRadius: Story<ButtonProps> = () => {
  const theme = useTheme();
  return (
    <RcButton
      radius="round"
      keepElevation
      color="neutral.elevation"
      size="small"
      style={{ minWidth: '104px' }}
      TouchRippleProps={{
        style: { color: theme.palette.interactive.b02 },
      }}
    >
      <RcTypography variant="caption1" color="interactive.f01">
        button
      </RcTypography>
    </RcButton>
  );
};

export const ButtonWithKeepElevation: Story<ButtonProps> = () => {
  switchToControlKnobs();

  return (
    <RcBox bgcolor="neutral.elevation" display="inline-block" padding="1em">
      <RcButton keepElevation>Keep</RcButton>
    </RcBox>
  );
};

export const ButtonWithIcon: Story<ButtonProps> = () => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <li>
        <div>
          <Title variant="body1">startIcon</Title>
          <RcButton startIcon={<RcIcon symbol={UserDefault} />}>login</RcButton>
        </div>
        <div>
          <Title variant="body1">endIcon</Title>
          <RcButton endIcon={<RcIcon symbol={Leave} />}>logout</RcButton>
        </div>
        <div>
          <Title variant="body1">both</Title>
          <RcButton
            startIcon={<RcIcon symbol={BubbleLinesBorder} />}
            endIcon={<RcIcon symbol={NewEmail} />}
          >
            logout
          </RcButton>
        </div>
      </li>
    </Wrapper>
  );
};

export const ButtonWithCustomColor: Story<ButtonProps> = () => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <li>
        <RcButton color="danger.b03">logout</RcButton>
        <RcButton color="success.b03">logout</RcButton>
        <RcButton color="highlight.b03">logout</RcButton>
        <RcButton color="informative.b01">logout</RcButton>
      </li>
    </Wrapper>
  );
};
