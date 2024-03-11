import  React from "react";


//components
import Navbar from "../components/Navbar/navbar.component";
import Movie from "../pages/Movie.page";

const MovieLayout = (props) => {
return (
    <>
    <Navbar />
    {props.children}
    <Movie / >
    </>
);
};

export default MovieLayout;
