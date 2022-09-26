import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-bgFooter mt-0 flex justify-center items-center ">
      <div className="w-2/4 h-[20rem] bg-blure flex justify-center items-center">
        <div>
            <Image alt='logoFooter' src='/LogoFooter.png' width='120px' height='120px'  />
        </div>
        <div className="text-lg" >
            <p>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
            <h5> All rights reserved@2021</h5>
        </div>
      </div>
      <div className="w-2/4 h-[20rem]"> </div>
    </footer>
  );
};

export default Footer;
