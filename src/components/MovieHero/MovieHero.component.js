import React from "react";


const MovieHero = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden" style={{ height: "calc(180vw)" }}>
        <img
          src="https://m.economictimes.com/thumb/msid-100076465,width-1200,height-900,resizemode-4,imgsize-56896/oppenheimer-trailer-is-out-offers-sneak-peek-into-christopher-nolans-magnum-opus-watch-here.jpg"
          alt="Openheimer"
        />
      </div>

      {/* Tablet and Desktop View */}
      <div className="hidden md:block lg:hidden">
        <img
          src="https://m.economictimes.com/thumb/msid-100076465,width-1200,height-900,resizemode-4,imgsize-56896/oppenheimer-trailer-is-out-offers-sneak-peek-into-christopher-nolans-magnum-opus-watch-here.jpg"
          alt="Openheimer"
        />
      </div>

      {/* Larger Desktop View */}
      <div className="relative hidden lg:block" style={{ height: "30rem" }}>
        {/* Background Overlay */}
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(26, 26, 26, 1) 25%, rgba(26, 26, 26, 1) 38%, rgba(26, 26, 26, 0.04) 97%, rgba(26, 26, 26, 1) 100%)",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Poster Image and Text Container */}
        <div className="absolute flex gap-3 items-center z-20 h-96 w-64 left-64 top-10">
          {/* Poster Image */}
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/oppenheimer-et00347867-1700808846.jpg"
            alt="Oppenheimer"
            className="w-48 h-auto rounded-xl mr-4"
          />
          {/* Text Container */}
          <div >
            <h1 className="text-white text-2xl font-bold">Oppenheimer</h1>
            <br/>
            <div className="flex items-center  gap-2" >
            <div style={{ backgroundColor: "#EEEEEE", whiteSpace: "nowrap", maxWidth: "calc(100% - 48px), " // Dynamic width calculation   
             }} className="text-black  h-10 flex items-center justify-center rounded-sm px-3 text-sm ">
            <h1 className="cursor-pointer py-1">2D, IMAX 2D</h1>
          </div>
          <div style={{ backgroundColor: "#EEEEEE", whiteSpace: "nowrap", maxWidth: "calc(100% - 48px)" // Dynamic width calculation   
             }} className="text-black-bold py-1 cursor-pointer h-10 flex items-center justify-center rounded-sm px-3 text-sm ">
          <a href="##">  English, Hindi </a>
          </div>
          </div>
         <br/>
         <h1 className="text-white" style={{whiteSpace:"nowrap"}}>
              3h 10m &bull; Biography, Drama, Historical &bull; UA &bull; 21 Jul, 2023 

               {/* used the HTML entity &bull; to represent a bullet (•) between the text elements. This will display the text in one line with bullets between them. */}
              </h1>
              <br/>

              <div className="flex items-center  gap-2" >
            <div style={{ backgroundColor: "#FF597B", whiteSpace: "nowrap", maxWidth: "calc(100% - 48px), " // Dynamic width calculation   
             }} className="text-white  h-10 flex items-center justify-center rounded-sm px-3 text-sm ">
            <h1 className="cursor-pointer  py-1">Book Now</h1>
          </div>
          <div style={{ backgroundColor: "#FF597B", whiteSpace: "nowrap", maxWidth: "calc(100% - 48px)" // Dynamic width calculation   
             }} className="text-white py-1 cursor-pointer h-10 flex items-center justify-center rounded-sm px-3 text-sm ">
          <a href="##">  Buy or Rent </a>
          </div>
          </div>

          </div>
        </div>

        {/* Background Image */}
        <img
          src="https://m.economictimes.com/thumb/msid-100076465,width-1200,height-900,resizemode-4,imgsize-56896/oppenheimer-trailer-is-out-offers-sneak-peek-into-christopher-nolans-magnum-opus-watch-here.jpg"
          alt="Openheimer"
          className="w-full h-full"
        />
      </div>










      
    </>
  );
};


export default MovieHero;
