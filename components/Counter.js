import { useState } from "react";

const Counter = () => {
  
  let [ seconds , setSecounds] = useState(10)
  let [ minutes , setMinutes] = useState(40)
  

  return (
    <article className=" text-lg absolute bg-gradient-to-r  from-purple-700 to-purple-400/90  py-2 px-4 -top-[64px] left-0 ">
   {minutes}:{seconds}
    </article>
  );
};

export default Counter;
