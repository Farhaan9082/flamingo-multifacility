import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex justify center h-screen pt-16 sm:pt-20 xl:pt-24">
      <div className="absolute top-0 left-0 h-screen w-full -z-2">
        <Image
          src="/bg-hero.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          quality={100}
        />
      </div>
      <div className="absolute top-0 left-0 h-screen w-full -z-1 bg-black opacity-70"></div>
      <div className="relative container py-4 flex flex-col justify-center items-center z-1 text-center">
        <h1 className="text-4xl tracking-tight font-semibold text-gray-50 sm:text-5xl md:text-6xl">
          Flamingo Multifacility Management Services
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-sm sm:max-w-lg sm:text-lg sm:mt-5 md:max-w-2xl md:mt-7 md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ipsa!
          Suscipit amet quia, ipsam molestiae delectus iure provident nostru.
        </p>
        <div className="mt-10 w-full flex flex-col gap-3 max-w-sm sm:max-w-none sm:flex-row sm:gap-5 sm:mt-11 sm:justify-center sm:items-center lg:mt-14">
          <Link href="/contact">
            <a className="flex-grow py-3 bg-gradient-to-l from-[#e5087e] to-[#2b336a] text-sm text-white sm:py-4 sm:flex-grow-0 sm:w-48 md:w-56 lg:w-60 lg:text-lg rounded-full">
              Get In Touch
            </a>
          </Link>
          <Link href="/about">
            <a className="flex-grow py-3 bg-gray-500/70 text-sm text-white sm:py-4 sm:flex-grow-0 sm:w-48 md:w-56 lg:w-60 lg:text-lg rounded-full">
              How Can We Help?
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
