import * as React from 'react';

export interface RadioGroupProps {
  dataHook?: string;
  onChange?: RadioButtonProps['onChange'];
  value?: RadioButtonProps['value'];
  disabledRadios?: RadioButtonProps['value'][];
  vAlign?: RadioButtonProps['vAlign'];
  disabled?: RadioButtonProps['disabled'];
  type?: RadioButtonProps['type'];
  display?: RadioGroupDisplay;
  selectionArea?: RadioButtonProps['selectionArea'];
  spacing?: string;
  lineHeight?: string;
  name?: string;
}

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  static Radio: typeof RadioButton;
}

export type RadioGroupDisplay = 'vertical' | 'horizontal';

export interface RadioButtonProps {
  dataHook?: string;
  value?: string | number;
  vAlign?: RadioButtonVAlign;
  name?: string;
  onChange?: (value: RadioButtonProps['value']) => void;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: RadioButtonType;
  lineHeight?: string;
  tabIndex?: number;
  selectionArea?: RadioButtonSelectionArea;
  content?: React.ReactNode;
  className?: string;
}

export type RadioButtonVAlign = 'center' | 'top';
export type RadioButtonType = 'default' | 'button';
export type RadioButtonSelectionArea = 'none' | 'hover' | 'always';

export class RadioButton extends React.PureComponent<RadioButtonProps> {}
