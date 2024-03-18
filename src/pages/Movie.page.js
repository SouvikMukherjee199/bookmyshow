
import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div
        className="container px-4 mx-auto"  // Added mx-auto class
        style={{ marginTop: "3rem", marginBottom: "3rem", width: "60%" }}
      >
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-grey-800 font-bold text-2xl">About the movie</h2>
          <p>
            The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph
            and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.
          </p>
          
        </div>
        <div className="my-8">
        <hr className="h-1 bg-black-500" />
          </div>
       
      </div>

     
    </>
  );
};

export default Movie;
