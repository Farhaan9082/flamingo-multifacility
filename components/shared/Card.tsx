interface cardInfo {
  name: string;
  img: string;
  description: string;
}

const Card = ({ name, description, img }: cardInfo) => {
  return (
    <a className="bg-gray-100 rounded-lg relative">
      <div className="p-6 sm:p-8">
        <div className="bg-accent-pink/50 p-2 w-fit rounded-full">
          <img className="w-9 h-9" src={img} alt="service-image" />
        </div>
        <h1 className="text-xl font-semibold mt-4 sm:text-2xl tracking-tight">
          {name}
        </h1>
        <p className="mt-4 text-base text-gray-600 lg:text-lg">{description}</p>
      </div>
    </a>
  );
};

export default Card;
