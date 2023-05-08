import Head from "next/head";
export default function Page({ data }) {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <ul>
        {data.map((d) => {
          return <li key={d}>{d.name}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const userData = await usersResponse.json();
  return { props: { data: userData } };
}
