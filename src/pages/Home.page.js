import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from  "../config/TempPosters.config";



function HomePage(){
    console.log("Home rendered");

    return (
        <>
        <div className="flex flex-col gap-3">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800">
                The best  of Entertainment
            </h1>
        <EntertainmentCardSlider/>
       
        </div>
        
        <div className="bg-navCol-200 py-16">
        {/* <div className="flex px-4 mx-4 ">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-full"  />
        </div> */}
        {/* Instead of putting the imagw above and applying the styles to it,we put so inside the container below just above the premier tag */}
         <div className="container mx-auto px-4 ">
         <div className="flex ">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-full"  />
        </div>
         <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Releases Every  Friday" isDark/>
         </div>
         </div>
        </div>

<div  className="container mx-auto px-4 ">
    <PosterSlider
    images={TempPosters}
    title="Online Streaming Events"
    isDark={false}
    />
</div>


<div  className="container mx-auto px-4 ">
    <PosterSlider
    images={TempPosters}
    title="Outdoor Events"
    isDark={false}
    />
</div>

      
        </>);
        
}

export default HomePage; 