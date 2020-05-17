import TextField from '@src/util/form/fields/text';

interface Props {
  field: TextField;
}

/**
 * Renders the react view for a {@link TextField}
 * uses the various functions of {@link TextField} to handle display and updates.
 * @param props contains the {@link TextField}
 */
const TextFieldView = (props: Props) => {
  const { field } = props;
  return (
    <div>
      <label>{field.getLabel()}</label>
      <input
        type="text"
        value={field.getValue()}
        onChange={(event) => {
          field.setValue(event.target.value);
        }}
        data-testid={field.getId()}
      />
    </div>
  );
};

export default TextFieldView;
