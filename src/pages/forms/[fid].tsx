import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import absoluteUrl from 'next-absolute-url';

import React from 'react';
import Form from '@src/util/form';

import FieldView from '@src/components/fields';
import getQuery from '@src/graphql/client/form';
import fetcher from '@src/graphql/client/fetcher';

interface State {
  form?: Form;
  ok: boolean;
}

interface Data {
  forms_by_pk: any;
}
interface Props {
  data: Data;
}

/**
 * Main View to use
 * Gets data from {@link getServerSideProps}
 */
class FormView extends React.Component<Props, State> {
  /**
   * Creates a {@link Form} from the props data
   * @param props Form data.
   */
  constructor(props: Props) {
    super(props);
    const ok = true;
    if (ok) {
      const form = new Form(this.props.data.forms_by_pk, {
        onUpdate: this.forceUpdate.bind(this),
      });
      this.state = { form, ok };
    } else {
      this.state = { ok };
    }
  }

  async submit() {
    const res = await fetch(`/api/forms/${this.state.form?.getId()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.form?.toJSON()),
    });
    if (!res.ok) {
      return {
        props: {
          ok: false,
        },
      };
    }
    const json = await res.json();

    this.setState({
      form: new Form(json, {
        onUpdate: this.forceUpdate.bind(this),
      }),
    });
  }
  /**
   * iterates through all the fields in the form and renders them using {@link FieldView}
   */
  render() {
    if (!this.state.ok) {
      return <div>something went wrong!</div>;
    } else {
      const fields = this.state.form?.getFields();

      const fieldViews = fields?.map((field) => (
        <FieldView key={field.getId()} {...{ field, submit: this.submit.bind(this) }} />
      ));

      return (
        <div>
          <div>{fieldViews}</div>
        </div>
      );
    }
  }
}

export default FormView;

/**
 * fetches form data based on the form id
 * @param context contains the form id which is grabbed from the url (ie `tilden.io/forms/{id}`)
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetcher(getQuery(`${context.params?.fid}`));
  return { props: { data } };
};
