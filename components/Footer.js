import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-bgFooter mt-0 flex justify-center items-center sm:flex-row flex-col ">
      <div className="  sm:w-2/4 w-full h-[20rem]  flex sm:justify-evenly justify-start items-center sm:flex-row flex-col">
        <div className="sm:py-0 py-8 " >
          <Image
            alt="logoFooter"
            src="/LogoFooter.png"
            width="120px"
            height="120px"
          />
        </div>
        <div className="text-lg">
          <p className=" sm:text-left text-center text-base sm:w-80 w-full sm:m-0 m-auto text-white/40 ">
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.{" "}
          </p>
          <div className="flex sm:justify-start justify-center space-x-5 w-72 sm:mx-0 mt-5 m-auto   ">
            <div>
              {" "}
              <Link href="#">
                <Image
                  alt="socialmedia"
                  src="/Vector.png"
                  width="24px"
                  height="17px"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  alt="socialmedia"
                  src="/Vector-1.png"
                  width="23px"
                  height="19px"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  alt="socialmedia"
                  src="/Vector-2.png"
                  width="15px"
                  height="20px"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  alt="socialmedia"
                  src="/Vector-3.png"
                  width="24px"
                  height="17px"
                />
              </Link>
            </div>
          </div>
          <h5 className="sm:mt-10 mt-6 text-base text-white/40  sm:text-left text-center">
            {" "}
            All rights reserved@2021
          </h5>
        </div>
      </div>
      <div className="w-2/4 h-[20rem]"> </div>
    </footer>
  );
};

export default Footer;
