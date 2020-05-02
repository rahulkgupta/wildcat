import Field from './fields'
import TextField from './fields/text'


class FieldFactory {

    public createField(id: string, fieldData: any, onUpdate: Function): Field {
        switch(fieldData.type) {
            case 'text': return new TextField(id, fieldData, onUpdate);
            default: throw Error('no field type found');
        }
    }
}

export default class Form {
    
    id: string
    factory: FieldFactory
    fields: Array<Field>
    onUpdate: Function

    constructor(data: any, hooks: any) {
        this.id = data.id;
        this.factory = new FieldFactory();
        this.fields = []
        this.onUpdate = hooks.onUpdate;
        for (const id in data.fields) {
            this.fields.push(this.factory.createField(id, data.fields[id], this.update.bind(this)))
        }
    }

    update() {
        this.fields.map((field) => field.update())
        this.onUpdate()
    }
    getFields() {
        return this.fields;
    }
}