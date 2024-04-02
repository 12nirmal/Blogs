"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [data, setData] = useState<any[]>([]);
  const [limit, setLimit] = useState(4);
  const [hasMore, setHasMore] = useState(true); // State to track if there are more blogs to load

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/photosgalleries?populate=*&pagination[start]=0&pagination[limit]=${limit}`
        );
        setData(response.data.data);
        if (response.data.data.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 8);
  };

  return (
    <>
      <section className="px-4 py-14 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {data.length > 0 && data[0]?.attributes?.title}
            </span>
          </h1>
        </div>
      </section>
      <section className="px-4 py-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item: any, index: any) => (
            <div key={index} className="flex flex-col items-center">
              {item.attributes.image &&
                item.attributes.image.data.length > 0 && (
                  <img
                    src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                    alt=""
                    className="object-cover h-48 md:h-80 w-full rounded-lg bg-gray-100 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                )}
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-8 py-6">
            <button
              onClick={handleLimit}
              className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Photos;
