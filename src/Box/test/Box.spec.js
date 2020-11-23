import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Box from '../Box';
import { spacingUnit } from '../../spacing';
import { boxPrivateDriverFactory } from '../Box.private.uni.driver';

describe('Box', () => {
  const createDriver = createUniDriverFactory(boxPrivateDriverFactory);

  describe('API', () => {
    it('should pass the inline style', async () => {
      const expectedOpacity = '0.5';
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box style={{ opacity: expectedOpacity }}>{children}</Box>,
      );

      expect(await driver.getStyle()).toContain(`opacity: ${expectedOpacity}`);
    });

    it('should pass the class name', async () => {
      const expectedClassName = 'some-selector';
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box className={expectedClassName}>{children}</Box>,
      );

      expect(await driver.hasClass(expectedClassName)).toBe(true);
    });

    it('should render the passed children', async () => {
      const children = <span>Children</span>;
      const driver = createDriver(<Box dataHook="box-child">{children}</Box>);

      expect(await driver.hasChild()).toBe(true);
    });

    describe('Borders', () => {
      it('should style the border', async () => {
        const expectedBorder = '1px solid blue';
        const children = <span>Children</span>;
        const driver = createDriver(
          <Box border={expectedBorder}>{children}</Box>,
        );

        expect(await driver.getStyle()).toContain(`border: ${expectedBorder}`);
      });

      it('should pass the `borderColor` prop even if `border` is passed', async () => {
        const expectedBorder = 'green';
        const children = <span>Children</span>;
        const driver = createDriver(
          <Box border="1px solid blue" borderColor={expectedBorder}>
            {children}
          </Box>,
        );

        expect(await driver.getStyle()).toContain(
          `border-color: ${expectedBorder}`,
        );
      });

      it('should style the borders specifically', async () => {
        const expectedBorderTopColor = '#2b81cb';
        const expectedBorderRightColor = '#D6453D';
        const expectedBorderBottomColor = '#8E21B1';
        const expectedBorderLeftColor = '#44823F';
        const children = <span>Children</span>;
        const driver = createDriver(
          <Box
            borderTopColor={expectedBorderTopColor}
            borderRightColor={expectedBorderRightColor}
            borderBottomColor={expectedBorderBottomColor}
            borderLeftColor={expectedBorderLeftColor}
          >
            {children}
          </Box>,
        );

        expect(await driver.getStyle()).toContain(
          `border-top-color: ${expectedBorderTopColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-right-color: ${expectedBorderRightColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-bottom-color: ${expectedBorderBottomColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-left-color: ${expectedBorderLeftColor}`,
        );
      });

      it('should pass the border color props even if `border` and `borderColor` are passed', async () => {
        const expectedBorderTopColor = '#2b81cb';
        const expectedBorderRightColor = '#D6453D';
        const expectedBorderBottomColor = '#8E21B1';
        const expectedBorderLeftColor = '#44823F';
        const children = <span>Children</span>;
        const driver = createDriver(
          <Box
            border="1px solid blue"
            borderColor="green"
            borderTopColor={expectedBorderTopColor}
            borderRightColor={expectedBorderRightColor}
            borderBottomColor={expectedBorderBottomColor}
            borderLeftColor={expectedBorderLeftColor}
          >
            {children}
          </Box>,
        );

        expect(await driver.getStyle()).toContain(
          `border-top-color: ${expectedBorderTopColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-right-color: ${expectedBorderRightColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-bottom-color: ${expectedBorderBottomColor}`,
        );
        expect(await driver.getStyle()).toContain(
          `border-left-color: ${expectedBorderLeftColor}`,
        );
      });
    });
  });

  describe('formatSpacingValue function', () => {
    it('should render with padding when passing a numeric value', async () => {
      const expectedPadding = `${spacingUnit}px`;
      const children = <span>Children</span>;
      const driver = createDriver(<Box padding={1}>{children}</Box>);

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing a predefined spacing value', async () => {
      const expectedPadding = `${spacingUnit * 2}px`;
      const children = <span>Children</span>;
      const driver = createDriver(<Box padding="small">{children}</Box>);

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing space-separated values', async () => {
      const expectedPadding = `${spacingUnit * 3}px ${spacingUnit * 3}px`;
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box padding={expectedPadding}>{children}</Box>,
      );

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing a spacing token', async () => {
      const expectedPadding = `${spacingUnit * 3}px`;
      const children = <span>Children</span>;
      const driver = createDriver(<Box padding="SP3">{children}</Box>);

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing space-separated spacing tokens', async () => {
      const expectedPadding = `${spacingUnit * 2}px ${spacingUnit * 5}px`;
      const children = <span>Children</span>;
      const driver = createDriver(<Box padding="SP2 SP5">{children}</Box>);

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing mixed space-separated spacing tokens', async () => {
      const expectedPadding = `${spacingUnit * 2}px 3px ${spacingUnit *
        4}px ${spacingUnit * 5}px`;
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box padding="SP2 3px large 5">{children}</Box>,
      );

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });
  });

  describe('formatSizeValue function', () => {
    it('should render with px suffix when passing a numeric value', async () => {
      const children = <span>Children</span>;
      const driver = createDriver(<Box maxHeight={100}>{children}</Box>);

      expect(await driver.getStyle()).toContain(`max-height: 100px`);
    });

    it('should render as passed when not a number', async () => {
      const children = <span>Children</span>;
      const driver = createDriver(<Box minWidth="1.3em">{children}</Box>);

      expect(await driver.getStyle()).toContain(`min-width: 1.3em`);
    });
  });
});
