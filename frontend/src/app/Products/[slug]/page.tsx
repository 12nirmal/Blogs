// // "use client";
// // import React from "react";
// // import { useParams } from "next/navigation";
// // const Product = () => {
// //   const router = useParams();
// //   console.log("'products", router);
// //   return <div>Product {router.slug}</div>;
// // };
// // export default Product;

// "use client";
// // import React from "react";
// // import { useParams } from "next/navigation";
// // const Product = () => {
// //   const router = useParams();
// //   console.log("'products", router);
// //   return <div>Product {router.slug}</div>;
// // };
// // export default Product;

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";

// const Product = () => {
//   const { slug } = useParams();
//   const [productData, setProductData] = useState<any>(null);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/blogs?populate=*&slug=${slug}`
//         );
//         setProductData(response.data.data[0]);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     };

//     if (slug) {
//       fetchProductData();
//     }
//   }, [slug]);

//   // Function to clean up HTML code
//   const cleanHtml = (htmlString: any) => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = htmlString;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
//       {productData ? (
//         <div>
//           <h1 className="text-3xl font-bold mb-4">
//             {productData.attributes.title}
//           </h1>
//           <div className="flex items-center text-gray-600 text-sm mb-4">
//             <img
//               src={`http://localhost:1337${productData.attributes.avatar.data.attributes.url}`}
//               alt=""
//               className="w-8 h-8 rounded-full mr-2"
//             />
//             <p>{productData.attributes.author}</p>
//             <span className="mx-2">-</span>
//             <p>{productData.attributes.date}</p>
//           </div>
//           <div className="mb-4">
//             <img
//               src={`http://localhost:1337${productData.attributes.image.data.attributes.url}`}
//               alt=""
//               className="w-full h-48 object-cover"
//             />
//           </div>
//           <div className="text-gray-700">
//             {/* Clean up HTML code before displaying */}
//             <p>{cleanHtml(productData.attributes.description)}</p>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Product;
