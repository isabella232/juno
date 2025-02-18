import React, {
  ComponentProps,
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  RcIcon,
  RcIconButton,
  RcOutlineTextFieldIconSizes,
  RcTextField,
} from '@ringcentral/juno';
import {
  Add as AddSvg,
  BoxBorder as BoxSvg,
  Close,
  Lock,
  LockBorder,
  SearchNav,
} from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import TextFieldStory from './TextField.story';

export default {
  title: '🚀 Cleanup Components/Forms/OutlineTextField',
  component: RcTextField,
  argTypes: {
    ...sortInDocTable<keyof OutlineTextFieldProps>(['size', 'radius']),
    ...notControlInDocTable<keyof OutlineTextFieldProps>([]),
    ...notShowInDocTable<keyof OutlineTextFieldProps>([]),
    ...TextFieldStory.argTypes,
  },
} as Meta;

type OutlineTextFieldProps = ComponentProps<typeof RcTextField>;

const OutlineTextFieldComponent: FunctionComponent<OutlineTextFieldProps> = ({
  children,
  value: valueArg,
  size,
  ...args
}) => {
  switchToControlKnobs();

  const ref = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState<string>(valueArg as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useLayoutEffect(() => {
    console.log(ref, inputRef);
  }, []);

  return (
    <>
      <RcTextField
        {...args}
        variant="outline"
        value={value}
        size={size}
        onChange={handleChange}
        ref={ref}
        inputRef={inputRef}
        fullWidth
      />
      <br />
      <RcTextField
        {...args}
        variant="outline"
        value={value}
        size={size}
        InputProps={{
          startAdornment: (
            <RcIcon color="neutral.f04" size={size} symbol={BoxSvg} />
          ),
          endAdornment: (
            <RcIconButton
              color="neutral.f04"
              variant="plain"
              size={size}
              symbol={AddSvg}
            />
          ),
        }}
        clearButtonProps={{ size }}
        onChange={handleChange}
        label="Number"
        fullWidth
      />
    </>
  );
};

export const OutlineTextField: Story<OutlineTextFieldProps> = (args) => (
  <OutlineTextFieldComponent {...args} />
);

OutlineTextField.storyName = 'OutlineTextField';

OutlineTextField.args = {
  helperText: 'some helper text',
  label: 'Topic',
  placeholder: 'Placeholder',
  id: 'id-OutlineTextField-1',
};

OutlineTextField.argTypes = {
  ...notControlInDocTable<keyof OutlineTextFieldProps>([]),
};

OutlineTextField.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5f4a29ef1221c8ef2a1e199b44a17b202b96e5df/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/8775122F-20F2-4591-B471-9F0A164963FE',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/text-fields',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const OutlineTextFieldExamplesComponent: FunctionComponent<OutlineTextFieldProps> =
  ({ size, radius }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <>
        <RcTextField
          variant="outline"
          value={value}
          size={size}
          radius={radius}
          placeholder="what's your age?"
          onChange={handleChange}
          fullWidth
          helperText="some helper text"
          gutterBottom
        />
        <br />
        <RcTextField
          variant="outline"
          value={value}
          size={size}
          radius="round"
          InputProps={{
            startAdornment: <RcIcon symbol={AddSvg} size={size} />,
            endAdornment: (
              <RcIconButton variant="plain" size={size} symbol={BoxSvg} />
            ),
          }}
          placeholder="what's your title?"
          onChange={handleChange}
          label="Title"
          fullWidth
          helperText="some helper text"
          gutterBottom
        />
        <br />
        <RcTextField
          variant="outline"
          value={value}
          type="password"
          size={size}
          radius="zero"
          InputProps={{
            endAdornment: (
              <RcIconButton size={size} variant="plain" symbol={Lock} />
            ),
          }}
          placeholder="what's your password?"
          onChange={handleChange}
          label="Password"
          fullWidth
          helperText="some helper text"
          gutterBottom
        />
        <br />
        <RcTextField
          variant="outline"
          value={value}
          size={size}
          radius={radius}
          InputProps={{
            endAdornment: (
              <RcIconButton size={size} variant="plain" symbol={LockBorder} />
            ),
          }}
          placeholder="what's your title?"
          onChange={handleChange}
          label="Title"
          fullWidth
          helperText="some helper text"
          gutterBottom
          focused
        />
        <br />
        <RcTextField
          variant="outline"
          value={value}
          size={size}
          radius={radius}
          placeholder="what's your title?"
          onChange={handleChange}
          label="Title"
          helperText="some helper text"
          fullWidth
          gutterBottom
          error
        />
        <br />
        <RcTextField
          variant="outline"
          value={value}
          placeholder="what's your title?"
          size={size}
          radius={radius}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <RcIcon size={size} color="disabled.f02" symbol={SearchNav} />
            ),
            endAdornment: (
              <>
                <span>clear</span>
                <RcIconButton
                  disabled
                  size={size}
                  variant="plain"
                  symbol={Close}
                />
              </>
            ),
          }}
          label="Title"
          fullWidth
          helperText="some helper text"
          gutterBottom
          disabled
        />
        <br />
        <RcTextField
          variant="outline"
          label="Custom color"
          fullWidth
          helperText="some helper text"
          gutterBottom
          placeholder="what's your title?"
          color="warning.f11"
        />
      </>
    );
  };

export const OutlineTextFieldExamples: Story<OutlineTextFieldProps> = (
  args,
) => <OutlineTextFieldExamplesComponent {...args} />;

OutlineTextFieldExamples.storyName = 'OutlineTextField Examples';

const sizes = ['small', 'medium', 'large'] as OutlineTextFieldProps['size'][];

const OutlineTextFieldSizesComponent: FunctionComponent<OutlineTextFieldProps> =
  ({ children, value: valueArg, ...args }) => {
    switchToControlKnobs();

    const ref = useRef();
    const inputRef = useRef();

    const [value, setValue] = useState<string>(valueArg as any);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    useLayoutEffect(() => {
      console.log(ref, inputRef);
    }, []);

    return (
      <>
        {sizes.map((size) => (
          <React.Fragment key={size}>
            <RcTextField
              {...args}
              variant="outline"
              label={size}
              value={value}
              size={size}
              onChange={handleChange}
              ref={ref}
              inputRef={inputRef}
              fullWidth
              InputProps={{
                startAdornment: (
                  <RcIcon
                    color="neutral.f04"
                    size={RcOutlineTextFieldIconSizes[size!]}
                    symbol={BoxSvg}
                  />
                ),
                endAdornment: (
                  <RcIconButton
                    color="neutral.f04"
                    variant="plain"
                    size={RcOutlineTextFieldIconSizes[size!]}
                    symbol={AddSvg}
                  />
                ),
              }}
            />
            <RcTextField
              {...args}
              multiline
              variant="outline"
              label={`${size}-multiline`}
              value={value}
              size={size}
              onChange={handleChange}
              ref={ref}
              inputRef={inputRef}
              fullWidth
              InputProps={{
                startAdornment: (
                  <RcIcon
                    color="neutral.f04"
                    size={RcOutlineTextFieldIconSizes[size!]}
                    symbol={BoxSvg}
                  />
                ),
                endAdornment: (
                  <RcIconButton
                    color="neutral.f04"
                    variant="plain"
                    size={RcOutlineTextFieldIconSizes[size!]}
                    symbol={AddSvg}
                  />
                ),
              }}
            />
            <br />
            <br />
          </React.Fragment>
        ))}
      </>
    );
  };

export const OutlineTextFieldSizes: Story<OutlineTextFieldProps> = (args) => (
  <OutlineTextFieldSizesComponent {...args} />
);

OutlineTextFieldSizes.storyName = 'OutlineTextField Sizes';

OutlineTextFieldSizes.args = {
  helperText: 'some helper text',
  placeholder: 'Placeholder',
  id: 'id-OutlineTextFieldWithSize-1',
};

OutlineTextFieldSizes.argTypes = {
  ...notControlInDocTable<keyof OutlineTextFieldProps>(['size']),
};
