import { Field, TextField } from '../../util/form';
import TextFieldView from './TextField';

interface Props {
    field: Field
}
const FieldView = (props: Props) => {
    if (props.field instanceof TextField) {
        return (<TextFieldView {...props} />)
    }
    return (<div>Oops something went wrong</div>) // replace with error page
}

export default FieldView;