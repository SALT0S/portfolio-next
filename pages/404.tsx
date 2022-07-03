import { NextPage } from "next";

import { Layout } from "../components/Layout";

const Page404: NextPage = () => {
  return (
    <Layout>
      <div>
        <h1>404 - Page not found</h1>
      </div>
    </Layout>
  );
};

export default Page404;
