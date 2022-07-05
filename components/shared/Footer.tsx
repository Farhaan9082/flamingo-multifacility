import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="">
            <div className="w-20 flex items-center justify-center">
              <Link href="/">
                <a>
                  <img src="/logo.webp" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-5 text-gray-700">
              <div className="flex gap-3 max-w-sm">
                <div className="">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm">
                  Office No. 306, 3rd Floor, Gauri Complex, Sector-11, C.B.D.
                  Belapur, Navi-Mumbai - 400614.
                </p>
              </div>
              <div className="flex gap-3 items-center max-w-sm">
                <div className="">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-sm">+91 9136987731</p>
              </div>
              <div className="flex gap-3 items-center max-w-sm">
                <div className="">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm">customercare@fmfms.co.in</p>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-5 md:place-content-end lg:flex-row lg:place-items-end lg:gap-8">
            <li className="text-base font-medium tracking-tight">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="text-base font-medium tracking-tight">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="text-base font-medium tracking-tight">
              <Link href="/management">
                <a>Management</a>
              </Link>
            </li>
            <li className="text-base font-medium tracking-tight">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="text-base font-medium tracking-tight">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-400">
          <small>
            &copy; Copyright {year} - Flamingo Multifacility Management
            Services. All Rights Reserved.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
