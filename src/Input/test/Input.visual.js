import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';
import { StatusCompleteFilled } from 'wix-ui-icons-common';

const defaultProps = {
  value: 'Some text value...',
};

const WrappedInput = props => {
  return (
    <div>
      {['small', 'medium', 'large'].map(size => (
        <div style={{ height: '50px' }} key={size}>
          <Input size={size} {...defaultProps} {...props} />
        </div>
      ))}
    </div>
  );
};

const WrappedInputAffix = props => (
  <WrappedInput
    {...props}
    clearButton
    status="loading"
    menuArrow
    suffix={<Input.Affix>$</Input.Affix>}
    prefix={<Input.Affix>@</Input.Affix>}
  />
);

const WrappedInputIconAffix = props => (
  <WrappedInput
    {...props}
    clearButton
    status="loading"
    menuArrow
    suffix={
      <Input.IconAffix>
        <StatusCompleteFilled />
      </Input.IconAffix>
    }
    prefix={
      <Input.IconAffix>
        <StatusCompleteFilled />
      </Input.IconAffix>
    }
  />
);

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  const storiesTitle = `${themeName ? `${themeName}|` : ''}Input`;

  storiesOf(storiesTitle, module).add('basic props', () => {
    return testWithTheme(
      <div>
        <WrappedInput />
        <WrappedInput disabled />
        <WrappedInput readOnly />
        <WrappedInput forceHover />
        <WrappedInput forceFocus />
        <WrappedInput placeholder="I'm a placeholder" value={null} />
      </div>,
    );
  });

  storiesOf(storiesTitle, module).add('status indicator', () => {
    return testWithTheme(
      <div>
        {['error', 'warning', 'loading'].map(status => (
          <div>
            <WrappedInput key={status} status={status} />
            <WrappedInput key={status} status={status} forceHover />
            <WrappedInput key={status} status={status} forceFocus />
          </div>
        ))}
      </div>,
    );
  });

  storiesOf(storiesTitle, module).add('prefix/suffix', () => {
    return testWithTheme(
      <div>
        <WrappedInputAffix />
        <WrappedInputAffix roundInput />
        <WrappedInputIconAffix />
        <WrappedInputIconAffix roundInput />
      </div>,
    );
  });

  storiesOf(storiesTitle, module).add('rtl', () => {
    return testWithTheme(
      <div>
        <WrappedInputAffix rtl />
        <WrappedInputAffix rtl roundInput />
        <WrappedInputIconAffix rtl />
        <WrappedInputIconAffix rtl roundInput />
      </div>,
    );
  });
};
