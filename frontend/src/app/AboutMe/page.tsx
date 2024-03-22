"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/aboute-mes?populate=*`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className=" z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-1"></div>
            {data?.map((item: any, index: number) => (
              <>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                      {item.attributes.title}
                    </h2>
                    {item.attributes.description}
                  </div>
                </main>
                <div className="lg:absolute lg:inset-y-0  right-10 lg:w-1/5 ">
                  <img
                    className="object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-none lg:rounded-lg shadow-2xl relative right-48"
                    src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
