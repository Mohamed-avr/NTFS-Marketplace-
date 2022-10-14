import Image from "next/image";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import { useState , useEffect } from "react";

const Footer = () => {
 
  const [showMedia , setShowMedia] = useState(false)

  useEffect(() => {
  if (typeof window !== "undefined") {
      console.log(window.scrollY);
      if ( window.innerWidth  > 500) {
           setShowMedia(true)
         
      }

      if (window.innerWidth  < 500) {
        setShowMedia(false)

      }
    };
  }
)

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
            pharetra gravida est.
          </p>   
        { showMedia ?  <div > <SocialMediaLinks /></div> : ''  }  
        </div>
      </div>
      <div className="sm:w-2/4 w-full sm:h-[20rem] h-[14rem] -sm:ml-[20rem]  flex justify-evenly items-center sm:flex-row ">
        <ul className="flex flex-col text-base space-y-2 text-white/40 capitalize ">
           <li className=" font-bold text-lg text-white mb-3 "> <Link href='' > About us</Link></li>
           <li> <Link href='' > About NFTs</Link></li>
           <li> <Link href='' > Live auctions</Link></li>
           <li> <Link href='' > NFT Blog</Link></li>
           <li> <Link href='' > activity</Link></li>
        </ul>
        <ul className="flex flex-col text-base space-y-2 text-white/40 capitalize ">
           <li className=" font-bold text-lg text-white mb-3 "> <Link href='' > support</Link></li>
           <li> <Link href='' > help & support</Link></li>
           <li> <Link href='' > item details</Link></li>
           <li> <Link href='' > author profile</Link></li>
           <li> <Link href='' > collection</Link></li>
        </ul>
       
      </div>
  

     { !showMedia ? <div  > <SocialMediaLinks /></div>     : ''  }
      
    </footer>
  );
};

export default Footer;
