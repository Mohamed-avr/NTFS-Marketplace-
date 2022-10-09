import { useState } from "react";

const Counter = () => {
  
  let [ seconds , setSecounds] = useState(10)
  let [ minutes , setMinutes] = useState(10)
  let [ hours , setHours] = useState(2)
  let [remSeconds , seTRemSeconds] = useState(10)

  const secondPass = () => {
        setMinutes( () => {
          Math.floor(seconds / 60)
        
        }) 
        seTRemSeconds( () => {
          seconds % 60
        })}

        setInterval(function() {
        
          secondPass();
      }, 1000);





   setInterval(() => {
 
   }, 1000);

  return (
    <article className=" text-lg absolute bg-gradient-to-r  from-purple-700 to-purple-400/90  py-2 px-4 -top-[64px] left-0 ">
   {minutes}:{seconds}
    </article>
  );
};

export default Counter;
