import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { createRadioButtonsGetter } from './sharedDriverMethods';
import { dataHooks as radioButtonDataHooks } from './RadioButton/constants';

export const radioGroupUniDriverFactory = (base, body) => {
  const getRadioButtons = createRadioButtonsGetter(base, body);

  const getSelectedRadio = async () => {
    for (const radio of await getRadioButtons()) {
      if (await radio.isChecked()) {
        return radio;
      }
    }
  };

  const getRadioByValue = async value => {
    const stringValue = value.toString();
    for (const radio of await getRadioButtons()) {
      if ((await radio.getValue()) === stringValue) {
        return radio;
      }
    }
  };

  const getRadioInputAt = async index => {
    const radio = (await getRadioButtons())[index];
    return radio.$(`[data-hook="${radioButtonDataHooks.RadioButtonInput}"]`);
  };

  return {
    ...baseUniDriverFactory(base, body),

    /** Selects the radio that matches the provided value */
    selectByValue: async value => (await getRadioByValue(value)).check(),

    /** Selects the radio in the provided index */
    selectByIndex: async index => (await getRadioButtons())[index].check(),

    /** Get the radio value in the provided index */
    getRadioValueAt: async index => {
      const radio = (await getRadioButtons())[index];
      if (radio) return radio.getValue();

      // Throws an error in case there is no RadioButton at the given index
      throw new Error(`No RadioButton at index ${index}`);
    },

    /** Get the radio element in the provided index, returns an element merged with the RadioButton driver methods */
    getRadioAtIndex: async index => (await getRadioButtons())[index],

    /** Get the value of the selected radio */
    getSelectedValue: async () => {
      const selected = await getSelectedRadio();
      return selected ? selected.getValue() : null;
    },

    /** Checks if the radio in the provided index is disabled */
    isRadioDisabled: async index =>
      (await getRadioButtons())[index].isDisabled(),

    /** Get the number of rendered radios */
    getNumberOfRadios: async () => (await getRadioButtons()).length,

    /** Get the value of radio button id at the provided index */
    getRadioIdAt: async index => {
      const radioButtonInput = await getRadioInputAt(index);
      const id = await radioButtonInput._prop('id');
      return id;
    },

    /** Get the value of radio button name at the provided index */
    getRadioNameAt: async index => {
      const radioButtonInput = await getRadioInputAt(index);
      const name = await radioButtonInput._prop('name');
      return name;
    },
  };
};
