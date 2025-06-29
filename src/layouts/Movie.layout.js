

import Footer from "../components/Footer/Footer";
import MovieNavbar from "../components/Navbar/movieNavbar.component";
import Movie from "../pages/Movie.page";

const MovieLayout = (props) => {
return (
    <>
    <MovieNavbar/>
    {props.children}
    <Movie/>
   <Footer/>
        
    </>
);
};

export default MovieLayout;
