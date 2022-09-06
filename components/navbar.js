import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="h-26 flex justify-center items-start align-middle bg-slate-600 py-3 ">
        {/* top */}
        <div className="flex justify-around w-2/4 items-center ">
          <Image src={'/logo.svg'} alt={'logo'}  width={'26'} height={'26'} />
           <button className=" invisible ">
            <div className="w-8 bg-black h-1 my-1 "></div>
            <div className="w-8 bg-black h-1 my-1 "></div>
           </button>
        </div>
        {/* bottom */}
        <div className="w-2/4 bg-amber-600 flex justify-center items-center " >
          <ul className="flex w-2/5 justify-around items-center mr-36 ">
            <li> explore </li>
            <li> creators </li>
            <li> comunity </li>
          </ul>
          <button> connect wallet </button>
        </div>
        <div> </div>
      </nav>
    </>
  );
};

export default Navbar;
