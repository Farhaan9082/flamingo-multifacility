interface serviceInfo {
  name: string;
  description: string;
  img: string;
}

export const ServiceCard = ({ name, description, img }: serviceInfo) => {
  return (
    <div className="bg-white rounded-lg relative">
      <div className="p-6 sm:p-8">
        <div className="bg-accent-pink/50 p-2 w-fit rounded-full">
          <img className="w-9 h-9" src={img} alt="service-image" />
        </div>
        <h1 className="text-xl font-semibold mt-4 sm:text-2xl tracking-tight">
          {name}
        </h1>
        <p className="mt-4 text-base text-gray-600 lg:text-lg">{description}</p>
        <div className="flex gap-3 items-center mt-8 font-medium lg:text-lg">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
