import Link from "next/link";

const Cta = () => {
  return (
    <div className="py-12 md:py-16 xl:py-20 bg-gradient-to-r from-accent-pink to-accent-blue">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-3xl font-semibold text-white max-w-lg tracking-tight md:text-4xl md:max-w-xl md:leading-10 xl:max-w-3xl xl:text-5xl xl:leading-[3.5rem]">
          Get top-notch services for facilities and security management
        </h1>
        <div className="mt-10 w-full flex items-center justify-center max-w-sm sm:max-w-none sm:mt-11 lg:mt-14">
          <Link href="/contact">
            <a className="py-3 bg-white/30 text-sm text-white sm:py-4 sm:flex-grow-0 w-48 md:w-56 lg:w-60 lg:text-lg rounded-full">
              Call Us Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
