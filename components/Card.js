import Image from "next/image";

const Card = () => {
  return (
    <article className=" bg-card p-2 w-[18rem] h-[26rem] flex justify-center flex-col   ">
      <div className=" w-[16rem]  h-[14rem] overflow-hidden mt-2">
        <Image
          src="/CardImages/image9.png"
          alt="ImageCard"
          width={"270px"}
          height={"340px"}
        />
      </div>
      <div className="p-2 flex justify-between align-middle mt-1 ">

        <div className="flex justify-between w-full  ">
          <div className=" flex  ">
            <Image
              alt=""
              src="/CardImages/image9.png"
              width={"45px"}
              height={"45px"}
              className='rounded-full'
            />
           <div className="ml-2 flex flex-col align-middle items-center  ">
            <h4 className="text-lg capitalize ">virtual art </h4>
            {/* <h5 className="text-sm text-white/70 "> by @wzard</h5> */}
           </div>
          </div>

          <div className="flex items-center ">
          <Image
              alt=""
              src="/CardImages/image9.png"
              width={"40px"}
              height={"40px"}
            />
            <span className="text-lg mx-1" >92</span>
          </div>

        </div>

        <div></div>
        <div></div>
      </div>
    </article>
  );
};

export default Card;
