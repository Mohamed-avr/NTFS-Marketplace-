import Image from "next/image";

const Creator = (props) => {
  return (
    <article className=" border-redbobble border-l-2 sm:w-[23rem] w-[20rem] h-20 bg-card flex justify-between items-center mx-3">
      <div className="flex  items-center ml-3 ">
        <div className="rounded-full"> 
           <Image alt="" src={props.Image} width={'50px'} height={'50px'} />
        </div>
        <div className="ml-2 -mt-3 ">
          <h5 className="text-lg font-medium  capitalize "> {props.name} </h5>
          <h6 className="text-base text-white/40 ">{props.price}</h6>
        </div>
      </div>

      <div className="w-[5rem]  h-5/4 border-l-2 border-white/30 flex flex-col align-middle items-center ">
        <h3 className=" text-2xl " >{props.numberOfItems}</h3>
        <h5 className="text-base capitalize text-white/40 ">items</h5>
      </div>
    </article>
  );
};

export default Creator;
