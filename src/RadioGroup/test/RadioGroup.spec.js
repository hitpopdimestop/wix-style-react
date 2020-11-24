import React from 'react';
import RadioGroup from '../RadioGroup';
import radioGroupDriverFactory from '../RadioGroup.driver';
import { radioGroupPrivateDriverFactory } from './RadioGroup.private.uni.driver';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

describe(RadioGroup.displayName, () => {
  const DefaultRadioGroup = props => (
    <RadioGroup {...props}>
      <RadioGroup.Radio value={'1'}>Option 1</RadioGroup.Radio>
      <RadioGroup.Radio value={'2'}>Option 2</RadioGroup.Radio>
      <RadioGroup.Radio value={'3'}>Option 3</RadioGroup.Radio>
      <RadioGroup.Radio value={'4'}>Option 4</RadioGroup.Radio>
    </RadioGroup>
  );

  afterEach(cleanup);

  describe('[sync]', () => {
    runTests(createRendererWithDriver(radioGroupDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(radioGroupPrivateDriverFactory), true);
  });

  function runTests(render, async) {
    const createDriver = jsx => render(jsx).driver;

    it('should render', async () => {
      const driver = createDriver(<RadioGroup />);
      expect(await driver.exists()).toBe(true);
    });

    it('should have the correct radio buttons', async () => {
      const driver = createDriver(<DefaultRadioGroup />);
      expect(await driver.getNumberOfRadios()).toBe(4);
      expect(driver.getRadioAtIndex(0)).toBeTruthy();
      expect(await driver.getRadioValueAt(0)).toBe('1');

      const nonExistingIndex = 9999;
      expect(await driver.getRadioAtIndex(nonExistingIndex)).toBeUndefined();
      if (async) {
        await expect(driver.getRadioValueAt(nonExistingIndex)).rejects.toThrow(
          `No RadioButton at index ${nonExistingIndex}`,
        );
      } else {
        expect(() => driver.getRadioValueAt(nonExistingIndex)).toThrow(
          `No RadioButton at index ${nonExistingIndex}`,
        );
      }
    });

    it('should return true if a radio button is disabled and false otherwise', async () => {
      const disabledRadios = ['1', '2'];
      const driver = createDriver(
        <DefaultRadioGroup disabledRadios={disabledRadios} />,
      );
      expect(await driver.isRadioDisabled(0)).toBe(true);
      expect(await driver.isRadioDisabled(1)).toBe(true);
      expect(await driver.isRadioDisabled(2)).toBe(false);
      expect(await driver.isRadioDisabled(3)).toBe(false);
    });

    it('should check the option that matches the initial value', async () => {
      const value = '2';
      const driver = createDriver(<DefaultRadioGroup value={'2'} />);
      expect(await driver.getSelectedValue()).toBe(value);
    });

    it('should update selected value after change to props', async () => {
      const { driver, rerender } = render(<DefaultRadioGroup value={'1'} />);
      const value = '2';
      rerender(<DefaultRadioGroup value={'2'} />);
      expect(await driver.getSelectedValue()).toBe(value);
    });

    it('should not check any options if value was not matched', async () => {
      const value = 10;
      const driver = createDriver(<DefaultRadioGroup value={value} />);
      expect(await driver.getSelectedValue()).toBe(null);
    });

    describe('onChange attribute', () => {
      it('should be called with the correct option value', async () => {
        const onChange = jest.fn();
        const driver = createDriver(<DefaultRadioGroup onChange={onChange} />);

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).toHaveBeenNthCalledWith(1, '1');

        // Select by index
        await driver.selectByIndex(1);
        expect(onChange).toHaveBeenNthCalledWith(2, '2');
      });

      it('should not be called upon checked option', async () => {
        const value = 1;
        const onChange = jest.fn();
        const driver = createDriver(
          <DefaultRadioGroup onChan={onChange} value={value} />,
        );

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).not.toHaveBeenCalled();

        // Select by index
        await driver.selectByIndex(0);
        expect(onChange).not.toHaveBeenCalled();
      });

      it('should not be called upon disabled option', async () => {
        const disabledRadios = ['1'];
        const onChange = jest.fn();
        const driver = createDriver(
          <DefaultRadioGroup
            onChange={onChange}
            disabledRadios={disabledRadios}
          />,
        );

        // Select by value
        await driver.selectByValue('1');
        expect(onChange).not.toHaveBeenCalled();

        // Select by index
        await driver.selectByIndex(0);
        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('display attribute', () => {
      it('should be vertical by default', async () => {
        const driver = createDriver(<DefaultRadioGroup />);
        expect(await driver.isVerticalDisplay()).toBe(true);
        expect(await driver.isHorizontalDisplay()).toBe(false);
      });

      it('should be horizontal', async () => {
        const driver = createDriver(
          <DefaultRadioGroup display={'horizontal'} />,
        );
        expect(await driver.isHorizontalDisplay()).toBe(true);
        expect(await driver.isVerticalDisplay()).toBe(false);
      });
    });

    describe('spacing attribute', () => {
      it('should be spaced', async () => {
        const driver = createDriver(<DefaultRadioGroup spacing={'30px'} />);
        expect(await driver.spacing()).toBe('30px');
      });
    });

    describe('line-height attribute', () => {
      it('should have default value', async () => {
        const driver = createDriver(<DefaultRadioGroup />);
        expect(await driver.lineHeight()).toBe(
          RadioGroup.defaultProps.lineHeight,
        );
      });
    });

    describe('name attribute', () => {
      it('should set name attribute of radio button', async () => {
        const driver = createDriver(<DefaultRadioGroup name="test" />);
        expect(await driver.getRadioNameAt(0)).toBe('test');
      });
      it('should set name as radio button id prefix', async () => {
        const driver = createDriver(<DefaultRadioGroup name="test" />);
        expect(await driver.getRadioIdAt(0)).toContain('test');
      });
    });
  }
});
