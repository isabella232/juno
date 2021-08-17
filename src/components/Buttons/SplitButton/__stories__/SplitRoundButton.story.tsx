import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, Fragment } from 'react';

import { omit } from '../../../../foundation';
import AddSvg from '../../../../icon/Add';
import ReplySvg from '../../../../icon/Reply';
import StartSvg from '../../../../icon/Start';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcGrid } from '../../../Grid';
import { RcIcon } from '../../../Icon';
import { RcIconSizes } from '../../../Icon/utils';
import { RcListItem } from '../../../List';
import { RcTooltip } from '../../../Tooltip';
import { RcTypography } from '../../../Typography';
import { RcSplitButton } from '../SplitButton';

export default {
  title: '🚀 Cleanup Components/SplitButton/SplitButton Examples(Icon)',
  component: RcSplitButton,
  argTypes: {
    ...sortInDocTable<keyof SplitButtonProps>(['color', 'variant', 'disabled']),
    ...notShowInDocTable<keyof SplitButtonProps>([]),
    ...notControlInDocTable<keyof SplitButtonProps>(['size']),
  },
} as Meta;

type SplitButtonProps = ComponentProps<typeof RcSplitButton>;

const variants: SplitButtonProps['variant'][] = ['round', 'plainIcon'];

export const SplitButtonRound: Story<SplitButtonProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcGrid container>
      {Object.keys(omit(RcIconSizes, ['inherit'])).map(
        (size: NonNullable<SplitButtonProps['size']>) => (
          <RcGrid item xs key={size}>
            <RcTypography color="neutral.f06" variant="title2">
              {size}
            </RcTypography>
            {variants.map((variant) => (
              <Fragment key={`${size}_${variant}`}>
                <RcTypography color="neutral.f04">{variant}</RcTypography>
                <RcSplitButton {...args} variant={variant} size={size}>
                  <RcListItem key={'1'} onClick={(e) => console.log('Text', e)}>
                    <RcTooltip title="cool">
                      <RcIcon symbol={AddSvg} size={size} />
                    </RcTooltip>
                  </RcListItem>
                  <RcListItem key={'2'} onClick={(e) => console.log('Task', e)}>
                    <RcIcon symbol={ReplySvg} size={size} />
                  </RcListItem>
                  <RcListItem key={'3'} onClick={(e) => console.log('Cool', e)}>
                    <RcTooltip title="cool">
                      <RcIcon symbol={StartSvg} size={size} />
                    </RcTooltip>
                  </RcListItem>
                </RcSplitButton>
                <br />
              </Fragment>
            ))}
          </RcGrid>
        ),
      )}
    </RcGrid>
  );
};

SplitButtonRound.args = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
  ActionButtonProps: {
    'aria-label': 'mainAction',
  },
  ControlButtonProps: {
    'aria-label': 'openMenu',
  },
};

SplitButtonRound.storyName = 'SplitButton Examples(Icon)';
