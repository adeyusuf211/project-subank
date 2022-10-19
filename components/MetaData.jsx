import Head from 'next/head';

const MetaData = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.content} />
            </Head>
        </>
    )
}

export default MetaData;