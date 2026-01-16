import axios from "axios";
import Head from "next/head";

export default function PP({ data }) {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Our Privacy Policy" />
      </Head>
      <div className="my-4 mx-2 sm:mx-20 blog text-xl">
        <div dangerouslySetInnerHTML={{ __html: data?.pp?.content }}></div>
      </div>
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/privacy-policy`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
