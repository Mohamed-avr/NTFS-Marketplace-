import Link from "next/link";
import { useRef } from "react";

const NavResponsive = (props) => {

    const Navbar = useRef();

  
  return (
    <article ref={Navbar}  className={props.navState ? 'bg-black/90 w-screen h-screen  fixed z-40 top-0': 'bg-black w-screen h-screen hidden  fixed z-40 top-0' } >
   
      <div className="mt-10 flex justify-center">
        <button className="w-14 h-14 text-white  rounded-full  text-5xl  "
        onClick={props.HandlingClickerFunction}>
          x
        </button>
      </div>

      <div className="mt-40">
        <ul className="flex w-full justify-around flex-col items-center   text-white  capitalize text-2xl space-y-10 ">
          <li className="border-primary border-b pb-1 mt-2 text-primary  ">
           
            <Link href={'#explore'}>  explore</Link> 
          </li>
          <li > <Link href={'#creators'}> creators </Link> </li>
          <li > <Link href={'#comunity'}> comunity </Link>   </li>
        </ul>
      </div>
    </article>
  );
};

export default NavResponsive ;
