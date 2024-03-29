import React, {useEffect} from "react";
import { useState } from "react";
import HeroSlider from "react-slick";
import axios from "axios" ;

//Component
import { NextArrow, PrevArrow } from "./arrows.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";//It is also possible to import the react-slick css into app.css directly without importing so seperately into every file because it is the global js file where all the components are getting rendered 

const HeroCarousal = () => {

  const [images, setImages] = useState([]) ;

  useEffect(() => {

    const requestNowPLayingMovies = async() =>
    {
      const getImages = await axios.get("/movie/now_playing"); //making a get request following async response to fetch the data from the '/movie' route from its now_playing parameter 
      setImages(getImages.data.results);
    };
   requestNowPLayingMovies();
  }, []);
//In the above code, we directly don't call the async function as making async calls has a fallback of making calls to the function even when there is nothing i.e, images here not getting rendered to function and still it keeps getting awaited till the images again start getting rendered ..we feel we create our own function that gets called only when data is fetched





  const settingsLg = {
   arrows:true,
   autoplay:true,
   centerMode: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerPadding: "300px",
   infinite: true,//will autoplay the carousals one after another for time immemorial by transferring the control to the next carousel once the last carousel has been encountered 
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow/>
  }
  
  const settings = {
    arrows : true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>
  };

  // const images = [
  //   "https://images.unsplash.com/photo-1682687220499-d9c06b872eee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1708432683889-c3133790465f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1708432527076-363a270e9f99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // ];

// useEffect(() => {
//     const getNowPlayingMovies = async () => {
//       try {
//         const response = await axios.get("/movie/now_playing");
//         // setImages(response.data.results.map(movie => movie.poster_path));
//       setImages(response.data.results);
      
//       } catch (error) {
//         console.error("Error fetching now playing movies:", error);
//       }
//     };

//     getNowPlayingMovies();
//   }, []);


//In the above code, we directly don't call the async function as making async calls has a fallback of making calls to the function even when there is nothing i.e, images here not getting rendered to function and still it keeps getting awaited till the images again start getting rendered ..we teel we create our own function that gets called only when data is fetched

  return (
    <>
     <div className="lg:hidden">
     <HeroSlider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-64 md:h-80 py-3 ">
            {/* <img src={image} alt={`slide-${index}`} className="w-f ull h-full rounded-md" /> */}
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt={`slide-${index}`} class Name="w-full h-full rounded-md" />

          </div>
        ))}
      </HeroSlider>
      </div>
  
      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>
        {images.map((image, index) => (
          <div key={index} className="w-20 h-96 px-2 py-3 ">
            {/* <img src={image} alt={`slide-${index}`} className="w-full h-full rounded-md" /> */}
            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt={`slide-${index}`} className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
      </div>

  
     
    </>
  );
};

export default HeroCarousal;
