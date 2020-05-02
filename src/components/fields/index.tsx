import Field from '../../util/form/fields';

import TextFieldView from './TextField';
import TextField from '../../util/form/fields/text';

interface Props {
    field: Field
}
const FieldView = (props: Props) => {
    if (props.field) {
        return (<TextFieldView {...{
            field: props.field as TextField
        }} />)
    }
    return (<div>Oops something went wrong</div>) // replace with error page
}

export default FieldView;