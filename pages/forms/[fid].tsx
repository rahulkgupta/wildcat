import { GetServerSideProps } from 'next'
import fetch from 'node-fetch'
import absoluteUrl from 'next-absolute-url'

import { useRouter } from 'next/router'
import Form from '../util/form'; //figure out appropriate import

import FieldView from './fields';

const FormView = (props: Form) => {
    const form = new Form(props);
    const router = useRouter()
    const { fid } = router.query
    const fields = form.getFields();
    console.log(fields)
    const fieldViews = fields.map((field) =>
        <FieldView {...{field: field}} />
    );

    return (
        <div>
            <p>Form: {fid}</p>
            <div>{fieldViews}</div>
        </div>  
    );
}

export default FormView



export const getServerSideProps: GetServerSideProps = async context => {
    const { origin } = absoluteUrl(context.req)
    const res = await fetch(`${origin}/api/forms/${context.params?.fid}`)
    const json = await res.json()
    return { props: json};
  }
  