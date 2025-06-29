import Temp from "../components/Temp";

import Navbar from "../components/Navbar/navbar.component"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import HomePage from "../pages/Home.page";
import Footer from "../components/Footer/Footer";
const DefaultLayout = () =>
{
    return (
 
 <>{console.log("DefaultLayout rendered")}
   <Navbar />
   <HeroCarousal/>
   <Temp/>
   <HomePage/>
   <Footer/>
   
   </>
    );
};

export default DefaultLayout;
