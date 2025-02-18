import React, { ComponentProps } from 'react';

import {
  RcAvatar,
  RcBox,
  RcDialogTitle,
  RcIconButton,
  RcIconButtonGroup,
  RcTypography,
} from '@ringcentral/juno';
import { Close, Settings, Star } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialog/DialogTitle',
  component: RcDialogTitle,
  argTypes: {
    ...sortInDocTable<keyof DialogTitleProps>([]),
    ...notControlInDocTable<keyof DialogTitleProps>([]),
    ...notShowInDocTable<keyof DialogTitleProps>([]),
  },
} as Meta;

type DialogTitleProps = ComponentProps<typeof RcDialogTitle>;

export const DialogTitle: Story<DialogTitleProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcDialogTitle {...args}>{children}</RcDialogTitle>;
};

DialogTitle.storyName = 'DialogTitle';

DialogTitle.args = {
  children: 'Title',
};

DialogTitle.argTypes = {
  ...notControlInDocTable<keyof DialogTitleProps>([]),
};

DialogTitle.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/dialog-title/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const DialogTitleExamples: Story<DialogTitleProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcDialogTitle display="flex" disableTypography {...args} space={[0, 6]}>
      <RcAvatar size="medium" color="avatar.lake">
        SH
      </RcAvatar>
      <RcBox
        display="flex"
        justifyContent="center"
        flexDirection="column"
        margin="0 16px 0 8px"
      >
        <RcTypography variant="body1" color="neutral.f06">
          Jessica Lewis
        </RcTypography>
        <RcTypography variant="caption1" color="neutral.f03">
          1/23/2019 10:02 AM
        </RcTypography>
      </RcBox>
      <RcBox flex="1 1 auto" alignItems="center" display="flex">
        <RcTypography variant="subheading2" component="h2">
          {children}
        </RcTypography>
      </RcBox>
      <RcIconButtonGroup gap={-2.5}>
        <RcIconButton color="warning.f01" title="Favorite" symbol={Star} />
        <RcIconButton title="Settings" symbol={Settings} />
        <RcIconButton title="Close" symbol={Close} />
      </RcIconButtonGroup>
    </RcDialogTitle>
  );
};

DialogTitleExamples.storyName = 'DialogTitle Examples';
