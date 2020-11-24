import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';
import RadioButton from './RadioButton/RadioButton';
import { classes } from './RadioGroup.st.css';
import { dataHooks } from './constants';

/**
 * component for easy radio group creation.
 *
 * similar to HTML `<input type="radio"/>` except you don't need to handle `name` or click handlers
 */
class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.name = props.name || uniqueId('RadioGroup_');
  }

  render() {
    const {
      dataHook,
      onChange,
      disabled,
      disabledRadios,
      value,
      vAlign,
      display,
      spacing,
      lineHeight,
      selectionArea,
    } = this.props;
    return (
      <div
        data-hook={dataHook}
        className={classNames(classes[display], {
          [classes.selectionAreaAlways]: selectionArea === 'always',
          [classes.selectionAreaHover]: selectionArea === 'hover',
          [classes.vertical]: display === 'vertical',
        })}
        data-display={display}
      >
        {React.Children.map(this.props.children, (radio, index) => (
          <div
            className={classNames(classes.optionWrapper)}
            data-hook={dataHooks.RadioGroupRadioContainer}
            style={
              display === 'vertical' && index > 0 ? { marginTop: spacing } : {}
            }
          >
            <RadioGroup.Radio
              dataHook={radio.props.dataHook}
              value={radio.props.value}
              name={this.name}
              onChange={onChange}
              vAlign={vAlign}
              disabled={
                disabled || disabledRadios.indexOf(radio.props.value) !== -1
              }
              checked={radio.props.value === value}
              selectionArea={selectionArea}
              icon={radio.props.icon}
              lineHeight={lineHeight}
              content={radio.props.content}
            >
              {radio.props.children}
            </RadioGroup.Radio>
          </div>
        ))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Callback function when user selects a different value */
  onChange: PropTypes.func,

  /** Selected radio button value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** the values of the disabled radio buttons */
  disabledRadios: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /** Positioning of the radio bottom compared to the label */
  vAlign: PropTypes.oneOf(['center', 'top']),

  /** Make the entire control disabled */
  disabled: PropTypes.bool,

  /** Display direction of the radios */
  display: PropTypes.oneOf(['vertical', 'horizontal']),

  /** Selection area emphasises the clickable area, none means no emphasis, hover is when the mouse is on the component, and always will show constantly */
  selectionArea: PropTypes.oneOf(['none', 'hover', 'always']),

  children: PropTypes.arrayOf((propValue, key) => {
    if (propValue[key].type.displayName !== RadioButton.displayName) {
      return new Error(
        `RadioGroup: Invalid Prop children was given. Validation failed on child number ${key}`,
      );
    }
  }),

  /** Vertical spacing between radio buttons */
  spacing: PropTypes.string,

  /** Text line height */
  lineHeight: PropTypes.string,

  /** Controls html name attribute  */
  name: PropTypes.string,
};

RadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: '',
  vAlign: 'center',
  display: 'vertical',
  lineHeight: '24px',
  selectionArea: 'none',
};

RadioGroup.Radio = RadioButton;

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
