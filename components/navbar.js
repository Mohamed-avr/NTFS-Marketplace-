import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="h-[5rem] flex justify-evenly items-center align-middle py-10  fixed top-0 left-0 w-full ">
        {/* top */}
        <div className="flex justify-start w-2/6  items-center">
          <Image  className="" src={"/logo.svg"} alt={"logo"} width='33px' height='33px' />
          <button className=" invisible hidden ">
            <div className="w-8 bg-black h-1 my-1 "></div>
            <div className="w-8 bg-black h-1 my-1 "></div>
          </button>
        </div>
        {/* bottom */}
        <div className="w-2/4  flex justify-center items-center  mr-10 ">
          <ul className="flex w-2/5 justify-around items-center mr-36  space-x-4 text-base  text-white  capitalize ">
            <li className="border-primary border-b pb-1 mt-2 text-primary "> explore </li>
            <li className=""> creators </li>
            <li className=""> comunity </li>
          </ul>
          <button className="  border-primary border py-2 px-6  text-primary bg-blure/60  text-base ">
            connect wallet
          </button>

        </div>
        <div> </div>
      </nav>
    </>
  );
};

export default Navbar;
