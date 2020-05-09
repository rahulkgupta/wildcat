import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import absoluteUrl from 'next-absolute-url';

import React from 'react';
import Form from '../../util/form';

import FieldView from '../../components/fields';

interface State {
  form: Form;
}

/**
 * Main View to use
 * Gets data from {@link getServerSideProps}
 */
class FormView extends React.Component<Form, State> {
  /**
   * Creates a {@link Form} from the props data
   * @param props Form data.
   */
  constructor(props: Form) {
    super(props);
    const form = new Form(this.props, {
      onUpdate: this.forceUpdate.bind(this),
    });
    this.state = { form };
  }

  /**
   * iterates through all the fields in the form and renders them using {@link FieldView}
   */
  render() {
    const fields = this.state.form.getFields();

    const fieldViews = fields.map((field) => <FieldView key={field.getId()} {...{ field }} />);

    return (
      <div>
        <div>{fieldViews}</div>
      </div>
    );
  }
}

export default FormView;

/**
 * fetches form data based on the form id
 * @param context contains the form id which is grabbed from the url (ie `tilden.io/forms/{id}`)
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = absoluteUrl(context.req);
  const res = await fetch(`${origin}/api/forms/${context.params?.fid}`);
  const json = await res.json();
  return { props: json };
};
