import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notShowInDocTable,
  paletteChoice,
  switchToControlKnobs,
} from '../../../storybook';
import { RcTag } from '../Tag';

export default {
  title: '🚀 Cleanup Components/Tag',
  component: RcTag,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    textColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    borderColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

type TagProps = ComponentProps<typeof RcTag>;

export const Tag: Story<TagProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <RcTag {...args}>{children}</RcTag>
    </>
  );
};

Tag.args = {
  children: 'tag test overflowsannsadsndjdnsaasddksjnadsndsasdasdadsadsdsa',
};

Tag.argTypes = {
  ...notShowInDocTable<keyof TagProps>(['content']),
};

Tag.parameters = {
  tags: [],
};

export const TagWithCustomBorder = () => {
  return (
    <RcTag
      color="neutral.b01"
      textColor="interactive.f01"
      borderColor="highlight.f02"
      onClick={() => {
        console.log('tag click');
      }}
    >
      tag test overflowsannsadsndjdnsaasddksjnadsndsasdasdadsadsdsa
    </RcTag>
  );
};