import Image from "next/image";

const PopularCol = (props) => {
  return (
    <article className="bg-cards p-5  w-[320px] h-[300px] sm:mx-4 mx-0  sm:my-0 my-4  ">
      <div>
        <Image
          src={props.image}
          alt="imageCollection"
          width={"280px"}
          height={"200px"}
        />
      </div>
      <div className="flex  justify-between items-center align-middle  mt-3 ">
        <div className="flex items-center ">
          <Image
            src={"/person.png"}
            alt="authorCol"
            width={"40px"}
            height={"40px"}
          />
          <span className="ml-2 text-lg font-medium ">@wzard</span>
        </div>
        <h3 className="text-base"> ERC-721</h3>
      </div>
    </article>
  );
};

export default PopularCol;
