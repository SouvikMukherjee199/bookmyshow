import { Routes, Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";

import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from "./HOC/Movie.HOC.js";

import Play_HOC from "./HOC/Play.HOC.js";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {}; //letting browser know that I want an API parameter
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <DefaultHOC />
            </>
          }
        />

        {/* {/* or we write the following    */}
        {/* <Route
          path="/*"
          element={<DefaultHOC />}
        />
        <Route
          path="/*"
          element={<HomePage />}
        /> */}

        <Route
          path="/movie/:id"
          element={
            <>
              <MovieHOC />
            </>
          }
        />
        {/* or we write the following
        <Route path="/movie/:id" element={<MovieHOC/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>  */}
        {/* Here the :id is the parameter or params that we learnt about during dealing with API */}

        <Route
          path="/plays"
          element={
            <>
              <Play_HOC />
            </>
          }
        />
      </Routes>
      {/* <h1 className="text-cyan-500 mx-50 ">Developed by Souvik Mukherjee</h1>
       */}
    </>
  );
}

export default App;
