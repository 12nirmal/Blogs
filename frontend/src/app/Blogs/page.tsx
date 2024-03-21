"use client";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  console.log(data);

  return (
    <div className=" container mx-auto xl:mx-w-[1180px] pt-[40px] text-black pb-[40px]">
      <h1>Latest Post </h1>
      <div className=" mt-[20px] grid grid-cols-3 gap-[20px]">
        {data?.map((item: any, index: number) => (
          <div className=" cursor-pointer w-full border border-[#2f3241]">
            <div className=" h-[240px] w-full overflow-hidden">
              <img
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt=""
                className=" w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out"
              />
            </div>
            <div className=" pt-[15px] pl-[8px] pb-[5px]">
              <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#4B6BFB] py-[2px] px-[4px] mb-[15px]">
                {item.attributes.category}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
