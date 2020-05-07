import SubmitField from '../../util/form/fields/submit';

interface Props {
    field: SubmitField
}


/**
 * Renders the react view for a {@link TextField}
 * uses the various functions of {@link TextField} to handle display and updates.
 * @param props contains the {@link TextField}
 */
const SubmitFieldView = (props: Props) => {

    let field = props.field
    return (
        <div>
            <input type="submit" value={field.getValue()} onClick={(event) =>{field.submit();}}></input>
        </div>
    )
}

export default SubmitFieldView;