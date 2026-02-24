import React from "react";
import Video from "../Components/home/Video";
import HomeHeroText from "../Components/home/HomeHeroText";
import HomeBottomText from "../Components/home/HomeBottomText";
//  import Videos from "../../public/Videos";

const Home = () => {
  return (
    <div>
    <div className="h-screen w-screen fixed">
   <Video /> </div>
     <div className="h-screen w-screen relative flex flex-col justify-between ">
        <HomeHeroText /><br /><br />
        <HomeBottomText />
    </div> 
    </div>
  );
};

export default Home;
