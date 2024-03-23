"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/aboute-mes?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`,
      }}
    >
      <div className="bg-white bg-opacity-75">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {data.map((item: any, index) => (
            <div
              key={index}
              className="my-10 sm:flex sm:items-center sm:justify-between"
            >
              <div className="sm:w-2/3 sm:mr-10">
                <h2 className="text-2xl font-extrabold text-yellow-300 mb-4">
                  {item.attributes.title}
                </h2>
                <p className="text-lg">{item.attributes.description}</p>
              </div>
              <div className="sm:w-1/3 sm:mt-0 mt-6">
                <img
                  className="w-full h-auto rounded-lg shadow-2xl"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
