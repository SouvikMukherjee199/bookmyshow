// import React, { useEffect, useState } from "react" ;
// import Poster from "../components/Poster/poster.component";
// import PlaysFilter from "../components/PlaysFilters/PlayFilters.component";
// import axios from "axios";

// const Plays = () =>  {
//   const [plays, setplays] = useState([]);
//   useEffect(()=>{
//   const requestPlays = async () =>{
//     const getPlays = await axios.get("/discover/tv");
//    setplays(getPlays.data.results);
// };
// requestPlays();

//   },[])
//   console.log({plays});

//     return (
//  <>
    
// <div className="container mx-auto px-4 bg-gray-100 py-4 ">
// <div className="w-full lg:flex gap-6 lg:flex-row-reverse">

// <div className="lg:w-8/12">
// <h2 className="text-2xl mb-4 font-bold">Plays in Kolkata</h2>
// <div className="flex flex-wrap ">

//     <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// {/* <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"/> */}
// <Poster
// src= {"https://static.toiimg.com/photo/106215040.cms?imgsize=20534"}
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"/>
// </div>

// <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"/>
// </div>

// <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"/>
// </div>

// <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"
// />
// </div>

// <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"
// />
// </div>

// <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
// <Poster
// src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371023-wgyrfdveyq-portrait.jpg"
// title= "Kabuliwala"
// subtitle=  "Hindi ₹300"
// />
// </div>
// </div>

// </div>
// <div className="lg:w-1/4 border-2 bg-white border-white">
// <h2 className="text-2xl mb-4 font-bold">Filter</h2>
// <div>
//     <PlaysFilter title="Date" tags={["Today", "Tomorrow" , "This Weekend"]}/>
//     <PlaysFilter title="Language" tags={["Hindi", "Bengali" , "English"]}/>
//     <PlaysFilter title="Categories" tags={["Theatre"]}/>
//     <PlaysFilter title="Genres" tags={["Drama", "Comedy" , "Action", "Adventure","Broadway","Classic","Contemporary","Fantasy","Historical","Horror","Musical","Mystery","Period","Psychological","Suspense","Thriller", "Tragedy"]}/>
//     <PlaysFilter title="More Filters" tags={["Outdoor Events"]}/>
//     <PlaysFilter title="Price" tags={["Free", "0-500" , "501-2000" , "Above 2000"]}/>
// </div>

// </div>
// </div>

   

//     </div>

//  </>
// )
// };

// export default Plays;

// import React, { useEffect, useState } from "react";
// import Poster from "../components/Poster/poster.component";
// import PlaysFilter from "../components/PlaysFilters/PlayFilters.component";
// import axios from "axios";

// const Plays = () => {
//   const [plays, setPlays] = useState([]);

//   useEffect(() => {
//     const requestPlays = async () => {
//       const getPlays = await axios.get(`/discover/tv`);
//       setPlays(getPlays.data.results);
//     };
//     requestPlays();
//   }, []);

//   console.log({ plays });

//   return (
//     <>
//       <div className="container mx-auto px-4 bg-gray-100 py-4">
//         <div className="w-full lg:flex gap-6 lg:flex-row-reverse">
//           <div className="lg:w-8/12">
//             <h2 className="text-2xl mb-4 font-bold">Plays in Kolkata</h2>
//             <div className="flex flex-wrap">
//               {plays.map((play) => (
//                 <div key={play.id} className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
//                   <Poster
//                     src={`${play.poster_path}`}
//                     title={play.original_name}
//                     subtitle={`Rating: ${play.vote_average}`}
//                   />
                  
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/4 border-2 bg-white border-white">
//             <h2 className="text-2xl mb-4 font-bold">Filter</h2>
//             <div>
//               <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
//               <PlaysFilter title="Language" tags={["Hindi", "Bengali", "English"]} />
//               <PlaysFilter title="Categories" tags={["Theatre"]} />
//               <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Action", "Adventure", "Broadway", "Classic", "Contemporary", "Fantasy", "Historical", "Horror", "Musical", "Mystery", "Period", "Psychological", "Suspense", "Thriller", "Tragedy"]} />
//               <PlaysFilter title="More Filters" tags={["Outdoor Events"]} />
//               <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Plays;
import React, { useEffect, useState } from "react";
import Poster from "../components/Poster/playposter.component";
import PlaysFilter from "../components/PlaysFilters/PlayFilters.component";
import axios from "axios";

const Plays = () => {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const requestPlays = async () => {
      try {
        const response = await axios.get(`/discover/tv`);
        setPlays(response.data.results);
      } catch (error) {
        console.error("Error fetching plays:", error);
      }
    };

    requestPlays();
  }, []);

  return (
    <div className="container mx-auto px-4 bg-gray-100 py-4">
      <div className="w-full lg:flex gap-6 lg:flex-row-reverse">
        {/* Main Content */}
        <div className="lg:w-8/12">
          <h2 className="text-2xl mb-4 font-bold">Plays in Kolkata</h2>
          <div className="flex flex-wrap">
            {plays.map((play) => (
              <div key={play.id} className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                <Poster
                  // Constructing the full image URL using the TMDB base URL
                  src={`https://image.tmdb.org/t/p/w500${play.poster_path}`}
                  title={play.original_name || play.name}
                  subtitle={`Rating: ${play.vote_average}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className="lg:w-1/4 border-2 bg-white border-white">
          <h2 className="text-2xl mb-4 font-bold">Filter</h2>
          <div>
            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
            <PlaysFilter title="Language" tags={["Hindi", "Bengali", "English"]} />
            <PlaysFilter title="Categories" tags={["Theatre"]} />
            <PlaysFilter
              title="Genres"
              tags={[
                "Drama", "Comedy", "Action", "Adventure", "Broadway", "Classic",
                "Contemporary", "Fantasy", "Historical", "Horror", "Musical",
                "Mystery", "Period", "Psychological", "Suspense", "Thriller", "Tragedy"
              ]}
            />
            <PlaysFilter title="More Filters" tags={["Outdoor Events"]} />
            <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plays;
