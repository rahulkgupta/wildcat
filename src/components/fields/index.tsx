import Field from '@src/util/form/fields';

import TextFieldView from './TextField';
import TextField from '../../util/form/fields/text';
import SubmitField from '../../util/form/fields/submit';
import SubmitFieldView from './SubmitField';

interface Props {
  field: Field;
}

/**
 * Determines which type of View to render based on which subclass of {@links Field} is being used.
 * @param props Contains field data
 */
const FieldView = (props: Props) => {
  if (props.field instanceof TextField) {
    return (
      <TextFieldView
        {...{
          field: props.field as TextField,
        }}
      />
    );
  }
  if (props.field instanceof SubmitField) {
    return (
      <SubmitFieldView
        {...{
          field: props.field as SubmitField,
        }}
      />
    );
  }

  return <div>Oops something went wrong</div>; // replace with error page
};

export default FieldView;
