import { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/shared/Card";

const Facility: NextPage = () => {
  const facilityInfo = [
    {
      name: "housekeeping & mooring services",
      img: "/housekeeping.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "consultancy services",
      img: "/consultancy.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "events handling",
      img: "/events.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "horticulture / arboriculture services",
      img: "/horticulture.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "conservancy services",
      img: "/conservancy.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "manpower services",
      img: "/manpower.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "gardening services",
      img: "/gardening.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "caretaker services",
      img: "/caretaker.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "traffic warden services",
      img: "/traffic.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "cargo handling services",
      img: "/cargo.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "surveyor & survey activity",
      img: "/surveyor.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "warehouse management",
      img: "/warehouse.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
    {
      name: "electric contract work",
      img: "/electric.png",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
    },
  ];

  return (
    <div className="pt-12 md:pt-16 xl:pt-20">
      <Head>
        <title>Facility</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-12 md:py-16 xl:py-20">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {facilityInfo.map(({ name, description, img }) => (
            <Card key={name} name={name} description={description} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
