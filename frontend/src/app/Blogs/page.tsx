"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blog.css";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      setData(response.data.data);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };

  return (
    <div className="container mx-auto xl:mx-w-[1180px] pt-[40px] text-black pb-[40px]">
      <h1>Latest Post</h1>
      <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {data.map((item: any, index) => (
          <div key={index} className="cursor-pointer border-3d rounded">
            <div className="h-[240px] w-full overflow-hidden">
              <img
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt=""
                className="w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="pt-[15px] pl-[8px] pb-[5px]">
              <h2 className="bg-rose-900 inline-block text-white rounded-lg py-[4px] px-[8px] mb-[15px]">
                {item.attributes.category}
              </h2>
              <p className="text-[24px] font-bold">{item.attributes.title}</p>
              <div className="flex items-center gap-[25px] pt-[10px] text-[#97989F]">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      className="h-[50px] w-[50px]"
                      src={`http://localhost:1337${item.attributes.avatar.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                  <p>{item.attributes.author}</p>
                </div>
                <div>
                  <p>{item.attributes.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <button
          onClick={handleLimit}
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          View All Post
        </button>
      </div>
    </div>
  );
};

export default Blogs;
