const Why = () => {
  return (
    <div className="py-12 md:py-16 xl:py-20">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="">
          <h1 className="text-base uppercase tracking-wider font-bold text-accent-blue lg:text-lg">
            Why choose us
          </h1>
          <h1 className="text-4xl tracking-tighter font-semibold mt-6 lg:text-5xl xl:text-6xl">
            We have the best team of experts
          </h1>
          <p className="text-base text-gray-600 font-medium mt-4 max-w-xl lg:text-lg lg:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            praesentium tempora maximep Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus praesentium tempora maximep{" "}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-12 max-w-sm">
            <div className="">
              <h1 className="text-4xl text-accent-pink font-medium lg:text-5xl">
                07+
              </h1>
              <p className="mt-2 text-sm font-medium lg:text-base">
                years of experience
              </p>
            </div>
            <div className="">
              <h1 className="text-4xl text-accent-pink font-medium lg:text-5xl">
                100%
              </h1>
              <p className="mt-2 text-sm font-medium lg:text-base">
                client satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="aspect-w-3 aspect-h-2 md:aspect-w-3 md:aspect-h-3 xl:aspect-h-2">
          <img className="object-cover rounded-lg" src="/team.jpg" alt="team" />
        </div>
      </div>
    </div>
  );
};

export default Why;
