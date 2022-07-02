import { ServiceCard } from "./ServiceCard";

const Services = () => {
  const serviceInfo = [
    {
      name: "Security services",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
      img: "/guard.png",
    },
    {
      name: "Multifacility services",
      description:
        "Cover your health related expenses by picking button comprehensive health plan. Try our easy to use platform to understand",
      img: "/service.png",
    },
  ];

  return (
    <div className="py-12 md:py-16 xl:py-20 bg-[#F6F8F9]">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Our Services
          </h1>
          <div className="w-24 h-[3px] bg-gradient-to-r from-accent-pink to-accent-blue mt-3"></div>
          <p className="mt-6 text-base text-gray-700 lg:text-lg">
            Choosing a health or life insurance policy can be extremely
            overwhelming. So we’ll tell you
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-10 place-items-center md:grid-cols-2 lg:mt-14 xl:mt-16">
          {serviceInfo.map(({ name, description, img }) => (
            <ServiceCard
              key={name}
              name={name}
              description={description}
              img={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
