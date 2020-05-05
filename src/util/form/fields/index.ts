

/**
 * Abstract Field class
 * Provides basic functionality for a Field
 * If you want to create a new type of Field, extend this class.
 */
export default abstract class Field {
    id: string // id of the field
    label: string // label of the field, such as "Enter your Name"
    error: string // error, used for when someone inputs something incorrectly
    onUpdate: Function
    
    /**
     * 
     * @param id id of the field
     * @param data data to use for the field. primarly `label` and `error`. Probably needs to be cleaned up.
     * @param onUpdate function used to call when a Field is updated as in {@link TextField.setValue}
     */
    constructor(id: string, data: any, onUpdate: Function) {
        this.id = id;
        this.label = data.label;
        this.error = data.error;
        this.onUpdate = onUpdate;
    }

    /**
     * @returns Field id.
     */
    getId() {
        return this.id;
    }
    
    /**
     * @returns Field label
     */
    getLabel() {
        return this.label;
    }

    /**
     * @returns Field error
     */
    getError() {
        return this.error;
    }

    /**
     * null placeholder for update function. Called in {@link Form.update}
     */
    update() {
        return null;
    }
}

