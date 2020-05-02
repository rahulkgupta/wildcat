import Field from "..";

export default class TextField extends Field {
    value: string

    constructor(id: string, data: any, onUpdate:Function ) {
        super(id, data, onUpdate);
        this.value = data.value ? data.value : '';
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
        this.onUpdate();
        return this;
    }

}