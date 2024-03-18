import  React from "react";


//components
import Navbar from "../components/Navbar/navbar.component";

import MovieNavbar from "../components/Navbar/movieNavbar.component";
import Movie from "../pages/Movie.page";

const MovieLayout = (props) => {
return (
    <>
    <MovieNavbar/>
    {props.children}
    <Movie/>
        
    </>
);
};

export default MovieLayout;
