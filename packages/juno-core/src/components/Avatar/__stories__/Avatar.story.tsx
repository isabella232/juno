import React, { ComponentProps, useState } from 'react';

import {
  palette2,
  PresenceOrigin,
  RcAvatar,
  RcBox,
  RcButton,
  RcIcon,
  RcPresence,
  RcTypography,
  useAvatarColorToken,
  useAvatarShortName,
} from '@ringcentral/juno';
import {
  CallAdd,
  DefaultTeamAvatar as TeamAvatar,
} from '@ringcentral/juno-icon';
import {
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  useCheckRenderButton,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { AvatarDoc } from './Avatar.doc';
import avatar from './img/avatar.jpg';

export default {
  title: '🚀 Cleanup Components/Avatar',
  component: AvatarDoc,
  argTypes: {
    ...sortInDocTable<keyof AvatarProps>(['clickable']),
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...notShowInDocTable<keyof AvatarProps>([
      'isMember',
      'displayName',
      'unClickable',
      'customColor',
      'iconSymbol',
      'alt',
      'Img',
      'tooltip',
    ]),
  },
} as Meta;

type AvatarProps = ComponentProps<typeof RcAvatar>;

export const Avatar: Story<AvatarProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return <RcAvatar {...args} />;
};

Avatar.args = {
  src: `${avatar}`,
  title: 'tooltip',
  useRcTooltip: true,
  imgProps: {
    alt: 'avatar-image',
  },
};

Avatar.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5ddb9073872ba4b03bb609aceb8c5f8185524a33/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/B1BC628D-D65D-4D77-A14D-11A30B7A4A7E',
    },
  ],
};

Avatar.argTypes = {};

export const AvatarWithCustomImg: Story<AvatarProps> = () => {
  return (
    <RcAvatar>
      <img src="https://placeimg.com/100/100/any" alt="avatar" />
    </RcAvatar>
  );
};

export const AvatarWithText: Story<AvatarProps> = ({ children, ...args }) => {
  return (
    <RcAvatar
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
      {...args}
    >
      CK
    </RcAvatar>
  );
};

AvatarWithText.args = {
  color: 'interactive.b02',
};

export const AvatarWithPresence: Story<AvatarProps> = () => {
  const [presenceOrigin, setPresenceOrigin] = useState<PresenceOrigin>({
    vertical: 'bottom',
    horizontal: 'right',
  });
  return (
    <>
      <RcAvatar
        presenceOrigin={presenceOrigin}
        src={avatar}
        presenceProps={{
          type: 'available',
        }}
      />
      <RcAvatar
        presenceOrigin={presenceOrigin}
        src={avatar}
        presenceProps={{
          type: 'DND',
        }}
      />
      <RcTypography variant="subheading2" color="neutral.f06">
        Only render presence when active and hover
      </RcTypography>
      <RcAvatar
        presenceOrigin={presenceOrigin}
        src={avatar}
        presenceProps={{
          type: 'notReady',
        }}
        shouldRenderPresenceHovered
        clickable
      />
      <RcAvatar
        presenceOrigin={presenceOrigin}
        src={avatar}
        presenceProps={{
          type: 'busy',
        }}
        shouldRenderPresenceHovered
        clickable
      />
      <br />
      <br />
      <RcButton
        onClick={() =>
          setPresenceOrigin((pre) =>
            pre.horizontal === 'right'
              ? { ...pre, horizontal: 'left' }
              : { ...pre, horizontal: 'right' },
          )
        }
      >
        {presenceOrigin.horizontal === 'right' ? 'left' : 'right'} presence
      </RcButton>
      <br />
      <br />
      <RcButton
        onClick={() =>
          setPresenceOrigin((pre) =>
            pre.vertical === 'bottom'
              ? { ...pre, vertical: 'top' }
              : { ...pre, vertical: 'bottom' },
          )
        }
      >
        {presenceOrigin.vertical === 'bottom' ? 'top' : 'bottom'} presence
      </RcButton>
    </>
  );
};

export const AvatarWithCustomPresence: Story<AvatarProps> = () => {
  const sizes = [
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ] as AvatarProps['size'][];

  return (
    <>
      {sizes.map((avatarSize) => (
        <React.Fragment key={avatarSize}>
          {sizes.map((presenceSize) => (
            <RcAvatar
              key={avatarSize! + presenceSize!}
              src={avatar}
              size={avatarSize}
              presence={
                <RcPresence
                  size={presenceSize}
                  color={palette2('interactive', 'b02')}
                />
              }
            />
          ))}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export const AvatarWithIcon: Story<AvatarProps> = ({ ...args }) => {
  return (
    <RcAvatar
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
      iconSymbol={CallAdd}
      {...args}
    />
  );
};

AvatarWithIcon.args = {
  color: 'interactive.b02',
  title: 'tooltip',
  useRcTooltip: true,
};

export const AvatarWithCustomIcon: Story<AvatarProps> = () => {
  return (
    <RcAvatar
      color="avatar.lake"
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
    >
      <RcIcon symbol={CallAdd} />
    </RcAvatar>
  );
};

export const AvatarWithMask: Story<AvatarProps> = () => {
  return (
    <RcAvatar
      color="avatar.lake"
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
      mask
      clickable
    >
      <RcIcon symbol={TeamAvatar} />
    </RcAvatar>
  );
};

AvatarWithMask.argTypes = {};

export const AvatarWithCustomMask: Story<AvatarProps> = () => {
  return (
    <RcAvatar
      color="avatar.lake"
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
      mask={<RcIcon size="small" symbol={CallAdd} />}
    >
      <RcIcon symbol={TeamAvatar} />
    </RcAvatar>
  );
};

export const AvatarWithDisabled: Story<AvatarProps> = () => {
  return (
    <RcBox display="flex">
      <RcAvatar
        src={avatar}
        presence={<RcPresence color={palette2('interactive', 'b02')} />}
        disabled
        clickable
        title="This is disabled tips"
        useRcTooltip
        TooltipProps={{ ignorePointer: true }}
      />
      <RcAvatar
        src={avatar}
        presenceProps={{
          type: 'DND',
        }}
        disabled
        clickable
      />
      <RcAvatar
        color="avatar.lake"
        onClick={() => console.log('click')}
        onKeyDown={() => console.log('keydown')}
        mask={<RcIcon size="small" symbol={CallAdd} />}
        disabled
        clickable
      >
        <RcIcon symbol={TeamAvatar} />
      </RcAvatar>
      <RcAvatar
        onClick={() => console.log('click')}
        onKeyDown={() => console.log('keydown')}
        iconSymbol={CallAdd}
        disabled
        clickable
      />
    </RcBox>
  );
};

export const AvatarWithBuildInColorAndShortName: Story<AvatarProps> = () => {
  const name = useAvatarShortName({
    firstName: 'Alan',
    lastName: 'Zou',
  });

  const { count, element } = useCheckRenderButton('id');
  const color = useAvatarColorToken(count);

  return (
    <>
      <RcAvatar clickable color={color}>
        {name}
      </RcAvatar>
      {element}
    </>
  );
};
