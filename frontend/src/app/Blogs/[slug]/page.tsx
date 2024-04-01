"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        if (response.data.data.length > 0) {
          // Assuming slug is unique and returns only one post
          setBlogData(response.data.data[0]);
        } else {
          setBlogData(null); // Reset blogData if no post found for the slug
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, [slug]);

  // Function to clean up HTML code
  const cleanHtml = (htmlString: any) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      {blogData ? (
        <>
          <div className="border border-gray-300 rounded-lg overflow-hidden p-10">
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-2/3 pr-5">
                <h1 className="text-3xl font-bold mb-8">
                  {blogData.attributes.title}
                </h1>
                <span className="inline-block bg-violet-950 text-white text-xs font-semibold rounded px-2 py-1 mb-2">
                  {blogData.attributes.category}
                </span>
                <p className="text-lg font-semibold mb-2">
                  {/* {blogData.attributes.title} */}
                </p>
                <p className="text-gray-600 text-sm mb-2 font-bold">
                  Author: {blogData.attributes.author}
                </p>

                <p className="text-gray-600 text-sm mb-2 font-bold">
                  Date: {blogData.attributes.date}
                </p>
                <p className=" font-bold text-gray-600 text-sm mb-2">
                  {" "}
                  Description:-
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {cleanHtml(blogData.attributes.description)}
                </p>
              </div>
              <div className="w-full sm:w-1/3">
                <img
                  src={`http://localhost:1337${blogData.attributes.image.data.attributes.url}`}
                  alt=""
                  className="w-full h-auto object-cover rounded"
                />
              </div>
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
