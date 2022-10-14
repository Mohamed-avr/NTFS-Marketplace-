import { useState , useEffect } from "react";







const Counter = () => {

  // deadline date
const countDownDate = new Date("Dec 31 , 2022 23:59:59 ")
const [ days , setDays ] = useState(0);
const [ hours , sethours ] = useState(0);
const [ minutes , setminutes ] = useState(0);
const [ secounds , setsecounds ] = useState(0);


let theCounter  = setInterval(() => {
  // currrent date 
  const currentDate = new Date().getTime();
  // diffrent time
  const diffTime = countDownDate - currentDate ;
  
  // get time unites 
  // 1000ms = 1s

  setDays(Math.floor(diffTime/ (1000*60*60*24)))
  sethours(Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  setminutes(Math.floor((diffTime% (1000 * 60 * 60)) / (1000 * 60)))
  setsecounds(Math.floor((diffTime  % (1000 * 60)) / 1000) )


   if(diffTime<0) {
    clearInterval(theCounter)
   }

}, 1000);

useEffect( () => {
  theCounter
})


  return (
    <article className=" text-lg absolute bg-gradient-to-r  from-purple-700 to-purple-400/90  py-2 px-4 -top-[64px] left-0 ">
   { hours.length <= 1 ? `02 ${hours}`: hours} : { minutes.length <= 1 ? `0 ${minutes}`: minutes }: { secounds.length <= 1 ? `0 ${secounds}`: secounds }
    </article>
  );
};

export default Counter;
