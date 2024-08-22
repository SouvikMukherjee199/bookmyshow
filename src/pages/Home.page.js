import React, {useState, useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from  "../config/TempPosters.config";



function HomePage(){
    console.log("Home rendered");
    const [popularMovies, setPopularMovies] = useState([]); 
    //giving meaningful random names like popularMovies, setPopularMovies etc..
    useEffect(()=> 
    {
        const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);
    //We put the empty box bracket above because we want to execute the thing once
   console.log({popularMovies});

   const [topMovies, settopMovies] = useState([]); 
   //giving meaningful random names like popularMovies, setPopularMovies etc..
   useEffect(()=> 
   {
       const requesttopMovies = async () => {
       const gettopMovies = await axios.get("/movie/top_rated");
       settopMovies(gettopMovies.data.results);
       };
       requesttopMovies();
   }, []);
   //We put the empty box bracket above because we want to execute the thing once
  console.log({topMovies});

  const [outdoormovies, setoutdoormovies] = useState([]);

  useEffect(()=>{
    const requestoutdoormovies = async () =>{
       const getoutdoormovies = await axios.get("movie/upcoming");
       setoutdoormovies(getoutdoormovies.data.results);
    };
    requestoutdoormovies();
  }, []); //we put an empty array because we want to execute it only once

  console.log({outdoormovies});


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
         {/* <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Releases Every  Friday" isDark/> */}
         <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every  Friday" isDark/>
         </div>
         </div>
        </div>

<div  className="container mx-auto px-4 ">
    <PosterSlider
    images={topMovies}
    title="Online Streaming Events"
    isDark={false}
    />
</div>


<div  className="container mx-auto px-4 ">
    <PosterSlider
    images={outdoormovies}
    title="Outdoor Events"
    isDark={false}
    />
</div>

      
        </>);
        
}

export default HomePage; 