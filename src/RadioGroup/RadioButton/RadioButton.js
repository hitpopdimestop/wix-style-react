import React, {PropTypes} from 'react';
import uniqueId from 'lodash.uniqueid';
import styles from '../RadioGroup.scss';
import classNames from 'classnames';
import WixComponent from '../../WixComponent';

class RadioButton extends WixComponent {
  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  render() {
    const {value, vAlign, checked, disabled, name, onChange, style} = this.props;

    const radioClasses = classNames({
      [styles.radio]: true,
      [styles.checked]: checked,
      [styles.disabled]: disabled
    });

    const labelClasses = classNames({
      [styles.vcenter]: vAlign === 'center',
      [styles.vtop]: vAlign === 'top'
    });

    return (
      <div className={styles.radioWrapper} style={style}>
        <input
          type="radio"
          name={name}
          value={value}
          id={this.id}
          checked={checked}
          disabled={disabled}
          onChange={() => (!checked && !disabled) ? onChange(value) : null}
          />
        <label htmlFor={this.id} className={labelClasses} >
          <div className={radioClasses}/>
          <div className={styles.children}>
            {this.props.children}
          </div>
        </label>
      </div>
    );
  }
}

RadioButton.defaultProps = {
  vAlign: 'center'
};

RadioButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vAlign: PropTypes.oneOf(['center', 'top']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.object
};

RadioButton.displayName = 'RadioGroup.Button';

export default RadioButton;
