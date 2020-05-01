import { TextField } from '../../util/form';

interface Props {
    field: TextField
}


const TextFieldView = (props: Props) => {

    let field = props.field
    return (
        <div>
            <label>{field.getLabel()}</label>
            <input type="text" value={field.getValue()} onChange={(event) =>{field.setValue(event.target.value);}}></input>
        </div>
    )
}

export default TextFieldView;