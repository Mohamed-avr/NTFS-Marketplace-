import Image from "next/image";
import { useRef , useEffect } from "react";


// the Component
const Navbar = () => {
  const NavRef = useRef();



    if (typeof window !== "undefined") {
    window.onscroll= () => {
      console.log(window.scrollY)
      if(window.scrollY > 200) {
        NavRef.current.classList.remove('bg-ground/90')
        NavRef.current.classList.add('bg-ground')
        NavRef.current.classList.remove('sm:bg-transparent')
        NavRef.current.classList.add('sm:bg-ground')
      } 
      
      if(window.scrollY < 200) {
        NavRef.current.classList.add('bg-ground/90')
        NavRef.current.classList.remove('bg-ground')
        NavRef.current.classList.add('sm:bg-transparent')
        NavRef.current.classList.remove
        ('sm:bg-ground')
      }

    }
    }
  // windowChecker(100 ,NavRef.current )
  return (
    <>
      <nav ref={NavRef} className="h-[5rem] flex justify-evenly items-center align-middle py-10  fixed top-0 left-0 w-full  z-20 bg-ground/90 sm:bg-transparent  ">
        {/* top */}
        <div className="flex sm:justify-start justify-between sm:px-0 px-5 sm:w-2/6 w-full  items-center">
          <Image  className="" src={"/logo.svg"} alt={"logo"} width='33px' height='33px' />
          <button className=" sm:invisible sm:hidden flex flex-col items-center ">
            <div className="w-8 bg-primary  h-[2px] my-[3px] "></div>
            <div className="w-8 bg-primary  h-[2px] my-[3px] "></div>
            <div className="w-8 bg-primary  h-[1.6px] my-[3px] "></div>
          </button>
        </div>
        {/* bottom */}
        <div className="sm:w-2/4 hidden  sm:flex justify-center items-center  mr-10 ">
          <ul className="flex w-2/5 justify-around items-center mr-36  space-x-4 text-base  text-white  capitalize ">
            <li className="border-primary border-b pb-1 mt-2 text-primary "> explore </li>
            <li className=""> creators </li>
            <li className=""> comunity </li>
          </ul>
          <button className="  border-primary border py-2 px-6  text-primary bg-blure/60 capitalize text-base ">
            connect wallet
          </button>

        </div>
        <div> </div>
      </nav>
    </>
  );
};

export default Navbar;
