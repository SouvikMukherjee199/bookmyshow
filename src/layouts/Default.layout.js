import React from "react";
import Temp from "../components/Temp";
///components
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import HomePage from "../pages/Home.page";
const DefaultLayout = (props) =>
{
    return (
 
 <>{console.log("DefaultLayout rendered")}
   <Navbar />
   <HeroCarousal/>
   <Temp/>
   <HomePage/>
   
   </>
    );
};

export default DefaultLayout;
