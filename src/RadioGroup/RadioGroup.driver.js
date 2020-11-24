import toArray from 'lodash/toArray';
import { isClassExists } from '../../test/utils';
import radioButtonDriverFactory from './RadioButton/RadioButton.driver';
import { dataHooks } from './constants';
import { dataHooks as radioButtonDataHooks } from './RadioButton/constants';
import { classes } from './RadioGroup.st.css';

const radioGroupDriverFactory = ({ element }) => {
  const getRadios = () =>
    toArray(
      element.querySelectorAll(
        `[data-hook="${dataHooks.RadioGroupRadioContainer}"]`,
      ),
    ).map(radio =>
      Object.assign(radio, radioButtonDriverFactory({ element: radio })),
    );

  const getRadioInputAt = index => {
    const radio = getRadios()[index];
    return radio.querySelector(
      `[data-hook="${radioButtonDataHooks.RadioButtonInput}"]`,
    );
  };

  const getLabelElements = () =>
    getRadios().map(radio => radio.getLabelElement());

  const getSelectedRadio = () => getRadios().find(radio => radio.isChecked());

  const getRadioByValue = value =>
    getRadios().find(radio => radio.getValue() === value.toString());

  return {
    /** Checks that the element exists */
    exists: () => !!element,

    /** Selects the radio that matches the provided value */
    selectByValue: value => getRadioByValue(value).check(),

    /** Selects the radio at the provided index */
    selectByIndex: index => getRadios()[index].check(),

    /** Get the radio value at the provided index */
    getRadioValueAt: index => {
      const radio = getRadios()[index];
      if (radio) return radio.getValue();

      // Throws an error in case there is no RadioButton at the given index
      throw new Error(`No RadioButton at index ${index}`);
    },

    /** Get the radio element in the provided index */
    getRadioAtIndex: index => getRadios()[index],

    /** Get the value of the selected radio */
    getSelectedValue: () => {
      const selected = getSelectedRadio();
      return selected ? selected.getValue() : null;
    },

    /** Checks if the radio in the provided index is disabled */
    isRadioDisabled: index => getRadios()[index].isDisabled(),

    // TODO: We should deprecate getClassOfLabelAt(). Css tests should be in e2e tests.
    /** Get the class of the label element at the provided index */
    getClassOfLabelAt: index => getLabelElements()[index].className,

    /** Checks if the display is set to vertical */
    isVerticalDisplay: () => isClassExists(element, classes.vertical),

    /** Checks if the display is set to horizontal */
    isHorizontalDisplay: () => isClassExists(element, classes.horizontal),

    /** Get the value of applied spacing between radios */
    spacing: () => getRadios()[1].style._values['margin-top'],

    /** Get the value of applied line-height on the radio's labels */
    lineHeight: () => getLabelElements()[0].style._values['line-height'],

    /** Get the number of rendered radios */
    getNumberOfRadios: () => getRadios().length,

    /** Get the value of radio button id at the provided index */
    getRadioIdAt: index => {
      const radioButtonInput = getRadioInputAt(index);
      return radioButtonInput.id;
    },

    /** Get the value of radio button name at the provided index */
    getRadioNameAt: index => {
      const radioButtonInput = getRadioInputAt(index);
      return radioButtonInput.name;
    },
  };
};

export default radioGroupDriverFactory;
