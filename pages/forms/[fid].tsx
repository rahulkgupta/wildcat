import { GetServerSideProps } from 'next'

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



export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from external API
    
    // Pass data to the page via props
    return { props: {
        data: {
            key: 'value',
        },
    } }
  }
  