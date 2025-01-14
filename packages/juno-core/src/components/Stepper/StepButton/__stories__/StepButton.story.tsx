import React, { ComponentProps } from 'react';

import {
  RcStep,
  RcStepButton,
  RcStepper,
  RcTypography,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Stepper/StepButton',
  component: RcStepButton,
  argTypes: {
    ...sortInDocTable<keyof StepButtonProps>([
      'disabled',
      'error',
      'editable',
      'icon',
      'active',
      'completed',
    ]),
    ...notControlInDocTable<keyof StepButtonProps>(['optional']),
    ...notShowInDocTable<keyof StepButtonProps>(['last']),
  },
} as Meta;

type StepButtonProps = ComponentProps<typeof RcStepButton>;

export const StepButton: Story<StepButtonProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcStepper>
      <RcStep>
        <RcStepButton
          {...args}
          onClick={() => {
            console.log('click');
          }}
          optional={
            <RcTypography color="neutral.f03" variant="subheading1">
              optional
            </RcTypography>
          }
        >
          Select campaign settings
        </RcStepButton>
      </RcStep>
      <RcStep>
        <RcStepButton {...args}>Select campaign settings</RcStepButton>
      </RcStep>
      <RcStep>
        <RcStepButton {...args}>Select campaign settings</RcStepButton>
      </RcStep>
    </RcStepper>
  );
};

StepButton.storyName = 'StepButton';

StepButton.args = {};

StepButton.argTypes = {
  ...notControlInDocTable<keyof StepButtonProps>([]),
};

StepButton.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/step-button/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
