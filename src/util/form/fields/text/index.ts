import Field from '..';

/**
 * Extends {@link Field}
 */
export default class TextField extends Field {
  value: string;

  /**
   * Calls the {@link Field.constructor}
   * Main difference is that it sets the `value` from the data
   * @param id
   * @param data Contains the initial value of the TextField
   * @param onUpdate Function to call after {@link setValue}
   */
  constructor(id: string, data: any, onUpdate: Function) {
    super(id, data, onUpdate);
    this.value = data.value ? data.value : '';
  }

  /**
   * @returns this.value
   */
  getValue() {
    return this.value;
  }

  /**
   * Updates the value
   * Calls `this.onUpdate` after the value is updated (Passed in by the constructor).
   * @param value The updated value
   */
  setValue(value: string) {
    this.value = value;
    this.onUpdate();
    return this;
  }
}
