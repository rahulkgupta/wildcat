import Field from '..';

/**
 * Extends {@link Field}
 */
export default class SubmitField extends Field {
  value: string;

  /**
   *
   * @param id
   * @param data
   * @param onUpdate
   * @param onSubmit
   */
  constructor(id: string, data: any, onUpdate: Function) {
    super(id, data, onUpdate);
    this.value = data.value;
  }

  toJSON() {
    return {
      id: this.id,
      value: this.value,
    };
  }

  /**
   * @returns this.value
   */
  getValue() {
    return this.value;
  }
}
