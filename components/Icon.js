import Image from "next/image";

const Icon = (props) => {
  return (
      <article className="flex  justify-center flex-col items-center mx-4">
        <div className="w-[4rem] h-[4rem] bg-blure/40 rounded-full justify-center items-center flex ">
          <Image
            src={props.image}
            alt="ImageCard"
            width={"30px"}
            height={"30px"}
          />
        </div>
        <h3 className="capitalize text-primary text-base mt-4 font-medium "> {props.title} </h3>
      </article>

  );
};

export default Icon;
