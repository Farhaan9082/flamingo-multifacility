import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/shared/Card";

const Security: NextPage = () => {
  const securityInfo = [
    {
      name: "static guarding",
      img: "/static-guarding.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "door supervisors",
      img: "/door-supervisors.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "mobile patrol",
      img: "/mobile-patrol.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "close protection",
      img: "/close-protection.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "industrial security",
      img: "/industrial-security.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "bank security",
      img: "/bank-security.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "dog squad",
      img: "/dog-squad.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "cctv providing services",
      img: "/cctv.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
  ];

  return (
    <div className="pt-12 md:pt-16 xl:pt-20">
      <Head>
        <title>Security</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 md:py-16 xl:py-20">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {securityInfo.map(({ name, description, img }) => (
            <Card key={name} name={name} description={description} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
