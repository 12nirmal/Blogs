"use client";
// import React from "react";

// const ProductDetals = ({ params }: { params: { slug: string } }) => {
//   return (
//     <>
//       <div>this is product</div>
//       <div>{params.slug}</div>
//     </>
//   );
// };

// export default ProductDetals;

// ProductDetails.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  // const router = useRouter();
  const { slug } = params;
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(slug);
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        if (response.data.data.length > 0) {
          // Assuming slug is unique and returns only one post
          setBlogData(response.data.data[0]);
          console.log(response);
        } else {
          setBlogData(null); // Reset blogData if no post found for the slug
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      {blogData ? (
        <>
          <h1 className="text-3xl font-bold mb-8 text-center">
            {blogData.attributes.title}
          </h1>
          <div className="border rounded shadow overflow-hidden">
            <img
              src={`http://localhost:1337${blogData.attributes.image.data.attributes.url}`}
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1 mb-2">
                {blogData.attributes.category}
              </span>
              <div className="text-lg font-semibold mb-2">
                {blogData.attributes.title}
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Author: {blogData.attributes.author}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Date: {blogData.attributes.date}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Description: {blogData.attributes.description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>loading.....</div>
      )}
    </div>
  );
};

export default ProductDetails;
