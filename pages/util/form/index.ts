// Form should be a class with a functionality like getField, etc.
// on change, react element should run field validation and field conditionals 
// form should keep all the state, so when a field is updated, the react element calls field.update. 



export class Field {
    id: string
    label: string
    error: string

    constructor(id: string, data: any) {
        this.id = id;
        this.label = data.label;
        this.error = data.error;
    }

    getLabel() {
        return this.label;
    }

    getError() {
        return this.error;
    }
}

export class TextField extends Field {

    constructor(id: string, data: any) {
        super(id, data);
    }

}

class FieldFactory {

    public createField(id: string, fieldData: any): Field {
        switch(fieldData.type) {
            case 'text': return new TextField(id, fieldData);
            default: throw Error('no field type found');
        }
    }
}

export default class Form {
    id: string
    factory: FieldFactory
    fields: Array<Field>

    constructor(data: any) {
        this.id = data.id;
        this.factory = new FieldFactory();
        this.fields = []
        for (const id in data.fields) {
            this.fields.push(this.factory.createField(id, data.fields[id]))
        }
    }

    getFields() {
        return this.fields;
    }
}