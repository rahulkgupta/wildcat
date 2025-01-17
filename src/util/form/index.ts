import Field from './fields';
import TextField from './fields/text';
import SubmitField from './fields/submit';

/**
 * Factory class that creates fields based on their type.
 */
class FieldFactory {
  /**
   *
   * @param id The id of the field
   * @param fieldData The data for the field. We use fieldData.type` to determine what field to instantiate.
   * @param onUpdate the function to call after a field updates.
   */
  public createField(id: string, fieldData: any, onUpdate: Function): Field {
    switch (fieldData.type) {
      case 'text':
        return new TextField(id, fieldData, onUpdate);
      case 'submit':
        return new SubmitField(id, fieldData, onUpdate);
      default:
        throw Error(`no field type found ${fieldData.type}`);
    }
  }
}

interface Hooks {
  /**
   * This is called after the form updates. See {@link Form.update}
   */
  onUpdate: Function;
}

/**
 * This class is the main interface with React at the moment and contains the business logic.
 */
export default class Form {
  id: string; // id of the form
  factory: FieldFactory; // generates the Fields
  fields: Array<Field>; // array of fields
  onUpdate: Function; // passed in by the hooks argument

  /**
   * Instantiating a Form
   * @param data JSON data from the API (pages/api/forms/[fid].ts)
   * @param hooks This allows consumers of the Form to hook into the lifecycle of the form. See {@link Hooks} for more detail.
   */
  constructor(data: any, hooks: Hooks) {
    this.id = data.id;
    this.factory = new FieldFactory();
    this.fields = [];
    this.onUpdate = hooks.onUpdate;
    for (const field in data.data.fields) {
      this.fields.push(this.factory.createField(field, data.data.fields[field], this.update.bind(this)));
    }
  }

  /**
   * Updates the state of the form.
   * This function is passed into {@link FieldFactory.createField}
   * which is then passed to the Field constructor.
   */
  update(): void {
    this.fields.map((field) => field.update());
    this.onUpdate();
  }

  getFields(): Field[] {
    return this.fields;
  }

  getId(): string {
    return this.id;
  }

  toJSON(): any {
    const fields: string[] = [];
    this.fields.map((field) => fields.push(field.toJSON()));

    return JSON.stringify({
      id: this.id,
      fields,
    });
  }
}
