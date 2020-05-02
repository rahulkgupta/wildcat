export default abstract class Field {
    id: string
    label: string
    error: string
    onUpdate: Function
    
    constructor(id: string, data: any, onUpdate: Function) {
        this.id = id;
        this.label = data.label;
        this.error = data.error;
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

    update() {
        return null;
    }
}

