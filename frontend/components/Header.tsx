// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const PhotosGallery = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/photos-galleries?populate=*`
//         );
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 max-w-[400px] md:max-w-[800px] mx-auto">
//         {data.map((item: any, index) => (
//           <div key={index} className="w-full md:w-auto ">
//             {/* Check if images array is present and has at least one item */}
//             {item.attributes.images &&
//               item.attributes.images.data.length > 0 && (
//                 <img
//                   src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} // Accessing the first image URL
//                   alt=""
//                   className="object-cover group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
//                   style={{ width: "214px", height: "286px" }}
//                 />
//               )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PhotosGallery;
