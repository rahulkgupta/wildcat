import SubmitField from '@src/util/form/fields/submit';

interface Props {
  field: SubmitField;
  submit: Function;
}

/**
 * Renders the react view for a {@link TextField}
 * uses the various functions of {@link TextField} to handle display and updates.
 * @param props contains the {@link TextField}
 */
const SubmitFieldView = (props: Props) => {
  const field = props.field;
  return (
    <input
      type="submit"
      value={field.getValue()}
      onClick={(event) => {
        props.submit();
      }}
      data-testid={field.getId()}
    ></input>
  );
};

export default SubmitFieldView;
