import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { RcButton } from '../../../../components/Buttons';
import { Title } from '../../../../storybook/components';
import { useForceUpdate } from '../../useForceUpdate';
import { usePrevious } from '../usePrevious';

export default {
  title: '🔧 Foundation/Hooks/usePrevious',
  argTypes: {},
} as Meta;

export const usePreviousExample: Story<{}> = () => {
  const [stateCount, setStateCount] = useState(0);
  const previousCount = usePrevious(() => stateCount);

  const forceUpdate = useForceUpdate();

  return (
    <>
      <RcButton onClick={() => setStateCount(stateCount + 1)}>Add</RcButton>
      <br />
      <br />
      <Title>
        Current render:
        {stateCount}
      </Title>
      <Title>
        Previous render:
        {previousCount}
      </Title>
      <RcButton onClick={forceUpdate}>ForceRender</RcButton>
    </>
  );
};

usePreviousExample.args = {};
usePreviousExample.storyName = 'usePrevious';
