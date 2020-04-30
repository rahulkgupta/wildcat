import { TextField } from '../../util/form';

interface Props {
    field: TextField
}


const TextFieldView = (props: Props) => {
    let field = props.field
    return (
        <div>
            {field.getLabel()}
            {field.getError()}
        </div>
    )
}

export default TextFieldView;