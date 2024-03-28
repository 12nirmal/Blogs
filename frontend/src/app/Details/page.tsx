// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const { Slug } = useParams();
//   const [blog, setBlog] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `http://localhost:1337/api/blogs?slug=${Slug}`
//       );
//       setBlog(response.data[0]);
//     };
//     fetchData();
//   }, [Slug]);

//   if (!blog) {
//     return <div>Loading...</div>;
//   }

//   // Render blog details
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
//       <div className="border rounded shadow overflow-hidden">
//         <img
//           src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`}
//           alt=""
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4">
//           <span className="inline-block bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1 mb-2">
//             {blog.attributes.category}
//           </span>
//           <h2 className="text-lg font-semibold mb-2">
//             {blog.attributes.title}
//           </h2>
//           <p className="text-gray-600 mb-4">{blog.attributes.description}</p>
//           <div className="flex items-center text-gray-600 text-sm">
//             <img
//               src={`http://localhost:1337${blog.attributes.avatar.data.attributes.url}`}
//               alt=""
//               className="w-8 h-8 rounded-full mr-2"
//             />
//             <p>{blog.attributes.author}</p>
//             <span className="mx-2">-</span>
//             <p>{blog.attributes.date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;
