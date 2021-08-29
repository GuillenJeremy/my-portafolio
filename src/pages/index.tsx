import * as React from "react";
import Layout from '../components/layout/layout';
import { Header } from "../components/header/header";
import { Navbar } from '../components/navbar/navbar';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Jeremy Guillen | Front end developer</title>
        <Navbar />
        <Header />
      </main>
    </Layout>
  )
}

export default IndexPage
