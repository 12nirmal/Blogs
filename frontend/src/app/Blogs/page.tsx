"use client";
// Blogs.tsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Blogs = () => {
  const [data, setData] = useState<any>([]);
  const [limit, setLimit] = useState(4);
  const [hasMore, setHasMore] = useState(true); // State to track if there are more blogs to load

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      setData(response.data.data);
      // Check if there are more blogs to load
      if (response.data.data.length < limit) {
        setHasMore(false);
      }
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 8);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item: any) => (
          <Link href={`/Blogs/${item.attributes.slug}`} key={item.id}>
            <div className="border rounded shadow overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                src={`http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4 ">
                <span className="inline-block bg-violet-950 text-white text-xs font-semibold rounded px-2 py-1 mb-2">
                  {item.attributes.category}
                </span>
                <h2 className="text-lg font-semibold mb-2">
                  {/* {item.attributes.title} */}
                </h2>
                <div className="flex items-center text-sm">
                  <img
                    src={`http://localhost:1337${item.attributes.avatar.data.attributes.url}`}
                    alt=""
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="font-bold">{item.attributes.author}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLimit}
            className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
