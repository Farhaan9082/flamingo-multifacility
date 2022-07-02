import type { NextPage } from "next";
import Head from "next/head";
import Cta from "../components/home/Cta";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Why from "../components/home/Why";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Why />
      <Services />
      <Cta />
    </div>
  );
};

export default Home;
