import Image from "next/image";


const CardTypeTow = ( {name , artist , likes , price ,image} ) => {

  console.log(image)


  return (
    <article className=" bg-card p-2 w-[18rem] h-[20rem] flex justify-center flex-col items-center  ">
      <div className=" w-[16rem]  h-[14rem] overflow-hidden mt-2 relative">
        <Image
          src={image}
          alt="ImageCard"
          width={"270px"}
          height={"340px"}
        />
         <button className=" bg-primary absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[10rem] py-3 text-black text-base font-medium ">
              Place a Bid
            </button>
      </div>
      <div className="p-2 flex flex-col justify-between align-middle mt-3 w-full items-center  ">

        <div className="flex justify-between w-full h-10  ">
          <div className=" flex  ">
           
            <Image
              alt=""
              src="/person3.png"
              width={"43px"}
              height={"40px"}
              className='rounded-full'
            />
           <div className="ml-2 flex flex-col align-middle items-center -mt-2  ">
            <h4 className="text-lg capitalize "> {name} </h4>
            <h5 className="text-sm opacity-30 "> by @{artist}</h5>
           </div>
          </div>

          <div className="flex items-center opacity-30 ">
          <Image
              alt=""
              src="/CardImages/Icon.svg"
              width={"20px"}
              height={"23px"}
            />
            <span className="text-lg mx-1 " >{likes}</span>
          </div>
        </div>
        <div className="flex justify-between  w-full mt-4 capitalize " >
             <h5 className=" text-base opacity-50 text-white  " > current bit  </h5>
             <h5 className=" text-base  text-white font-medium  " >  {price} ETH  </h5>   
        </div>
      </div>
    </article>
  );
};

export default CardTypeTow;
