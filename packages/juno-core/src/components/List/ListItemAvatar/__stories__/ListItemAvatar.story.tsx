import React, { ComponentProps } from 'react';

import {
  RcAvatar,
  RcListItem,
  RcListItemAvatar,
  RcListItemText,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../../Avatar/__stories__/img/avatar.jpg';

export default {
  title: '🚀 Cleanup Components/Lists/ListItemAvatar',
  component: RcListItemAvatar,
  argTypes: {
    ...sortInDocTable<keyof ListItemAvatarProps>([]),
    ...notControlInDocTable<keyof ListItemAvatarProps>([]),
    ...notShowInDocTable<keyof ListItemAvatarProps>([]),
  },
} as Meta;

type ListItemAvatarProps = ComponentProps<typeof RcListItemAvatar>;

export const ListItemAvatar: Story<ListItemAvatarProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcListItem singleLine>
      <RcListItemAvatar {...args}>
        <RcAvatar size="xsmall" src={avatar} />
      </RcListItemAvatar>
      <RcListItemText primary="ListItem Content" />
    </RcListItem>
  );
};

ListItemAvatar.args = {};

ListItemAvatar.argTypes = {
  ...notControlInDocTable<keyof ListItemAvatarProps>([]),
};

ListItemAvatar.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/demos/lists/#align-list-items',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

ListItemAvatar.storyName = 'ListItemAvatar';
