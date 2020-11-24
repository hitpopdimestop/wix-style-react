import { spacingUnit } from '../spacing';

export const directions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

export const horizontalAlignmentValues = {
  left: 'left',
  center: 'center',
  right: 'right',
  'space-between': 'space-between',
};

export const verticalAlignmentValues = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  'space-between': 'space-between',
};

export const spacingValues = {
  tiny: `${spacingUnit}px`,
  small: `${spacingUnit * 2}px`,
  medium: `${spacingUnit * 3}px`,
  large: `${spacingUnit * 4}px`,
};
