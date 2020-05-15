import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import absoluteUrl from 'next-absolute-url';

import React from 'react';
import Form from '@src/util/form';

import FieldView from '@src/components/fields';

interface State {
  form?: Form;
  ok: boolean;
}

interface Props {
  form?: Form;
  ok: boolean;
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
    const ok = props.ok;
    if (ok) {
      const form = new Form(this.props.form, {
        onUpdate: this.forceUpdate.bind(this),
      });
      this.state = { form, ok };
    } else {
      this.state = { ok };
    }
  }

  /**
   * iterates through all the fields in the form and renders them using {@link FieldView}
   */
  render() {
    if (!this.state.ok) {
      return <div>something went wrong!</div>;
    } else {
      const fields = this.state.form?.getFields();

      const fieldViews = fields?.map((field) => <FieldView key={field.getId()} {...{ field }} />);

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
  const { origin } = absoluteUrl(context.req);
  const res = await fetch(`${origin}/api/forms/${context.params?.fid}`);
  if (!res.ok) {
    return {
      props: {
        ok: false,
      },
    };
  }
  const json = await res.json();
  return {
    props: {
      form: json,
      ok: true,
    },
  };
};
