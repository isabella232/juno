import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcBox } from '../../../Box';
import { RcSwitch } from '../../../Forms/Switch';
import { RcFade } from '../Fade';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/Fade',
  component: RcFade,
  argTypes: {
    ...sortInDocTable<keyof GrowProps>([]),
    ...notControlInDocTable<keyof GrowProps>([]),
    ...notShowInDocTable<keyof GrowProps>([]),
  },
} as Meta;

type GrowProps = ComponentProps<typeof RcFade>;

export const Fade: Story<GrowProps> = ({ children, in: openProp, ...args }) => {
  switchToControlKnobs();
  const [open, setOpen] = useState(!!openProp);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <br />
      <br />
      <RcBox display="flex">
        <RcFade in={open} {...args}>
          <RcBox width="100px" height="100px" bgcolor="neutral.b03" />
        </RcFade>
      </RcBox>
    </>
  );
};

Fade.storyName = 'Fade';

Fade.args = {};

Fade.argTypes = {
  ...notControlInDocTable<keyof GrowProps>([]),
};

Fade.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/transitions/#fade',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};