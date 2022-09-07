import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="h-26 flex justify-center items-start align-middle py-3 bg-ground ">
        {/* top */}
        <div className="flex justify-around w-2/4 items-center ">
          <Image src={'/logo.svg'} alt={'logo'}  width={'26'} height={'26'} />
           <button className=" invisible ">
            <div className="w-8 bg-black h-1 my-1 "></div>
            <div className="w-8 bg-black h-1 my-1 "></div>
           </button>
        </div>
        {/* bottom */}
        <div className="w-2/4  flex justify-center items-center  mr-20 " >
          <ul className="flex w-2/5 justify-around items-center mr-36  text-white ">
            <li> explore </li>
            <li> creators </li>
            <li> comunity </li>
          </ul>
          <button className="  border-primary border py-2 px-6  text-primary " > connect wallet </button>
        </div>
        <div> </div>
      </nav>
    </>
  );
};

export default Navbar;
