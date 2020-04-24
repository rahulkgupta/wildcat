import { GetServerSideProps } from 'next'
import fetch from 'node-fetch'
import absoluteUrl from 'next-absolute-url'

import { useRouter } from 'next/router'

interface Data {
    key: string,
}

interface Props {
    data: Data,
}

const Form = (props: Props) => {
    const router = useRouter()
    const { fid } = router.query
    
    return (
        <div>
            <p>Form: {fid}</p>
            <p>data: {props.data.key}</p>
        </div>
    );
}

export default Form



export const getServerSideProps: GetServerSideProps = async context => {
    // Fetch data from external API
    // console.log(context.req)
    const { origin } = absoluteUrl(context.req)
    const res = await fetch(`${origin}/api/forms/${context.params?.fid}`)
    const data = await res.json()
    return { props: {
        data,
    } }
  }
  