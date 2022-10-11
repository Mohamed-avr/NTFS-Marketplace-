import { useState , useEffect } from "react";

const defaultRemainingTime = {
  seconds : '00', 
  minutes : '00', 
  hours : '00' , 
  days : '00',
}

const Counter = () => {
  return (
    <article className=" text-lg absolute bg-gradient-to-r  from-purple-700 to-purple-400/90  py-2 px-4 -top-[64px] left-0 ">
   { '12:12'}
    </article>
  );
};

export default Counter;
