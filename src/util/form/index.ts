// Form should be a class with a functionality like getField, etc.
// on change, react element should run field validation and field conditionals 
// form should keep all the state, so when a field is updated, the react element calls field.update. 



export class Field {
    id: string
    label: string
    error: string
    value: string
    onUpdate: Function

    constructor(id: string, data: any, onUpdate: Function) {
        this.id = id;
        this.label = data.label;
        this.error = data.error;
        this.value = data.value;
        this.onUpdate = onUpdate;
    }

    getId() {
        return this.id;
    }
    
    getLabel() {
        return this.label;
    }

    getError() {
        return this.error;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
        return this.value;
    }

    update() {
        return null;
    }
}

export class TextField extends Field {
    value: string
    onUpdate: Function

    constructor(id: string, data: any, onUpdate:Function ) {
        super(id, data, onUpdate);
        this.value = data.value ? data.value : '';
        this.onUpdate = onUpdate;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
        this.onUpdate();
        return this.value;
    }

    update() {
        return null;
    }

}

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