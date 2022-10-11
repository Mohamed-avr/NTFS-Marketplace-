import Link from "next/link";
import { useRef } from "react";

const FooterResonsive = () => {

    const Navbar = useRef();

     const closeNav = () => {
        Navbar.current.classList.remove('flex');
        Navbar.current.classList.add('hidden')
     }

  return (
    <article ref={Navbar} className="w-full h-full fixed top-0 left-0 z-30 bg-black/90 sm:hidden flex  justify-start flex-col items-center ">
      <div className="mt-10">
        <button className="w-14 h-14 text-white  rounded-full  text-5xl "
        onClick={closeNav}>
          x
        </button>
      </div>

      <div className="mt-40">
        <ul className="flex w-full justify-around flex-col items-center   text-white  capitalize text-2xl space-y-10 ">
          <li className="border-primary border-b pb-1 mt-2 text-primary  ">
           
            <Link href={'#explore'}>  explore</Link> 
          </li>
          <li > <Link href={'#creators'}> creators</Link> </li>
          <li > comunity </li>
        </ul>
      </div>
    </article>
  );
};

export default FooterResonsive;
