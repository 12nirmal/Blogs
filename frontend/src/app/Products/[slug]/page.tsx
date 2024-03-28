// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// const Product = () => {
//   const router = useParams();
//   console.log("'products", router);
//   return <div>Product {router.slug}</div>;
// };
// export default Product;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const Product = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?slug=${slug}`
        );
        if (response.data.data.length > 0) {
          setBlogData(response.data.data[0]);
        } else {
          // Handle case where blog post is not found
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching blog data:", error);
      }
    };
    if (slug) {
      fetchBlogData();
    }
  }, [slug]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      {blogData ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {blogData.attributes.title}
          </h1>
          <span className="inline-block bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1 mb-2">
            {blogData.attributes.category}
          </span>
          {blogData.attributes.image &&
            blogData.attributes.image.data &&
            blogData.attributes.image.data.attributes && (
              <img
                src={`http://localhost:1337${blogData.attributes.image.data.attributes.url}`}
                alt=""
                className="w-full h-48 object-cover my-4"
              />
            )}
          <p className="text-gray-600 mb-4">
            {blogData.attributes.description}
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <p>{blogData.attributes.author}</p>
            {/* Display Date */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
