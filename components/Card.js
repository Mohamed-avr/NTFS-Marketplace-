import Image from "next/image";
import Counter from "./Counter";

const Card = (props) => {
  return (
    <article className=" bg-card p-2 w-[18rem] h-[26rem] flex justify-center flex-col items-center  ">
      <div className=" w-[16rem]  h-[14rem] overflow-hidden mt-2">
        <Image
          src={props.image}
          alt="ImageCard"
          width={"270px"}
          height={"340px"}
        />
      </div>
      <div className="p-2 flex flex-col justify-between align-middle mt-3 w-full items-center  ">
        <div className="flex justify-between w-full h-10  relative ">
          <div className=" flex  ">
            <Image
              alt=""
              src="/Person2.png"
              width={"43px"}
              height={"40px"}
              className="rounded-full"
            />
            <Counter />
            <div className="ml-2 flex flex-col align-middle items-center -mt-2  ">
              <h4 className="text-lg capitalize "> {props.name} </h4>
              <h5 className="text-sm opacity-30 "> by @{props.artist}</h5>
            </div>
          </div>

          <div className="flex items-center opacity-30 ">
            <Image
              alt="cardAltImage"
              src="/CardImages/Icon.svg"
              width={"20px"}
              height={"23px"}
            />
            <span className="text-lg mx-1 ">{props.likes}</span>
          </div>
        </div>

        <div className="flex justify-between  w-full mt-4 capitalize ">
          <h5 className=" text-base opacity-50 text-white  "> current bit </h5>
          <h5 className=" text-base  text-white font-medium  ">
            {" "}
            {props.price} ETH{" "}
          </h5>
        </div>
        <div>
          <button className="bg-blure/60  border border-white/70 mt-7 w-[16rem] text-base py-2 capitalize hover:bg-primary/90 active:bg-primary/70 ">
            {" "}
            place a bid{" "}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
