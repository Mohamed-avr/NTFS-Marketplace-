import Image from "next/image";
import Link from "next/link";

const SocialMediaLinks = () => {
 
  return (
    <>
      <div className="flex sm:justify-start justify-center space-x-5 w-72 sm:mx-0 mt-5 m-auto   ">
        <div>
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
        All rights reserved@2021
      </h5>
    </>
  );
};

export default SocialMediaLinks;
