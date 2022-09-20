import Image from "next/image";

const Icon = (props) => {
    return ( <>
        <article>
            <div> 
            <Image
          src={props.image}
          alt="ImageCard"
          width={"270px"}
          height={"340px"}
        />
            </div>
            <h3 className="capitalize text-primary "> {props.title} </h3>
        </article>
    </> );
}
 
export default Icon;