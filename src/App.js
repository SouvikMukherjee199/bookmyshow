import { Routes, Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
//import Temp from "./components/Temp";
import NavSm from "./components/Navbar/navbar.component.js";
//axios
import axios from "axios";//It helps to globally render components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";//imported thw react-slick css here as app.js is the global file where all the components have got rendered 
import HomePage from "./pages/Home.page.js";
import MovieHOC from "./HOC/Movie.HOC.js";
import Movie from "./pages/Movie.page.js";
import Plays from "./pages/Plays.page.js";
import HeroCarousal from "./components/HeroCarousal/HeroCarousal.component.js";
import Navbar from "./components/Navbar/navbar.component.js";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3" ;
axios.defaults.params= {} ; //letting browser knoww that I want an API parameter
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; 
 

function App() {
  return (
    <>
      <Routes>
       
       <Route path="/*" element={<><DefaultHOC/></>}/>
         
                               {/* {/* or we write the following    */}
        {/* <Route
          path="/*"
          element={<DefaultHOC />}
        />
        <Route
          path="/*"
          element={<HomePage />}
        /> */}



        <Route path="/movie/:id" element={<><MovieHOC/></>}/>
                     {/* or we write the following
        <Route path="/movie/:id" element={<MovieHOC/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>  */}
        {/* Here the :id is the parameter or params that we learnt about during dealing with API */}
      
        <Route path="/plays" element={<>
       <Navbar />
       <HeroCarousal />
       <Plays />
       </>} />

      </Routes>
      {/* <h1 className="text-cyan-500 mx-50 ">Developed by Souvik Mukherjee</h1>
     */}
    
    </>
  );
}

export default App;
