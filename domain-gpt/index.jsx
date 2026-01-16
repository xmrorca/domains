import Head from "next/head";
import axios from "axios";
import OpenAiDomain from "../../Components/Front/OpenAi";

export default function Home_Page({ data }) {
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <OpenAiDomain pageData={data} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/ai-domain-generator/advance-ai`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
