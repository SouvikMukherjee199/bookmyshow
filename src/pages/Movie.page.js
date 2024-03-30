
import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BsFillCameraReelsFill } from "react-icons/bs";


const launchRazorPay = () =>{

let options = {
//careate an object called options with key-value pairs 
key : "rzp_test_8wWHnjXlqKMbay" , //passing the Razorpay test key from the website
amount : 500 , //or create an array of amounts or make a function to dynamically render the rupee values
currency : "INR" ,
name : "Book My Show Clone" ,
description : "Movie Purchase on Rental" ,
image : "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" ,

handler : () => {
alert("Payment done");
//prompts on getting the payment done
},

theme : { color:"#c4242d"}
};

let rzp = new window.Razorpay (options);//since the script of Razorpay is a part of html & a part of the new window(parent document following the DOM[Document Object Model] ) we access the Razorpay function 
rzp.open();//this will open the new window when the launchrazorPay function gets triggered
}

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
        <hr className=" bg-black-500" />
          </div>
       
       <div className="flex flex-col items-start gap-3">

   <h1 className="text-grey-800 font-bold text-2xl">Applicable Offers</h1>

   <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 w-96 border-2 border-dashed rounded-md p-3">

<div className="h-8  w-8">
<BsFillCameraReelsFill className="h-full w-full"/>
</div>
   
     <div className="flex flex-col items-start">
    <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
    <p className="text-gray-600 text-sm">Tap to view details</p>
        </div>
        </div>  
       </div>

       <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
       Book tickets
       </button>



      </div>

     
    </>
  );
};

export default Movie;
