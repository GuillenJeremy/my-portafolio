import * as React from "react";
import Layout from '../components/layout/layout';
import { Header } from "../modules/header/header";
import { Navbar } from '../modules/navbar/navbar';
import { MySkills } from '../modules/my-skills/skills';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Jeremy Guillen | Front end developer</title>
        <Navbar />
        <Header />
        <MySkills />
      </main>
    </Layout>
  )
}

export default IndexPage
