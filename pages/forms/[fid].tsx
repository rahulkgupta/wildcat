import { GetServerSideProps } from 'next'
import fetch from 'node-fetch'
import absoluteUrl from 'next-absolute-url'

import { useRouter } from 'next/router'
import Form from '../util/form'; //figure out appropriate import

import FieldView from './fields';
import React from "react";

interface State {
  form: Form;
}

class FormView extends React.Component<Form, State>  {
    constructor(props: Form) {
        super(props)
        const form = new Form(this.props, {
            onUpdate: this.forceUpdate.bind(this)
        });
        this.state = {form: form};
    }

    render() {
        const fields = this.state.form.getFields();
        
        const fieldViews = fields.map((field) =>
        <FieldView {...{field: field}} />
        );
        
        return (
            <div>
            <div>{fieldViews}</div>
            </div>  
        );
            
    }
}

export default FormView



export const getServerSideProps: GetServerSideProps = async context => {
    const { origin } = absoluteUrl(context.req)
    const res = await fetch(`${origin}/api/forms/${context.params?.fid}`)
    const json = await res.json()
    return { props: json};
}
