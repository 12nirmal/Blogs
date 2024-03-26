"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/home-blogs?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover bg-center text-center overflow-hidden">
          {data.map((item: any, index) => {
            const descriptionText =
              item.attributes.description[0].children[0].text;

            return (
              <div key={index}>
                <img
                  className="block select-none mx-auto bg-gray-300 transition duration-300 w-2400 h-1600"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                />
                <div className="max-w-3xl mx-auto">
                  <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                      <h1 className="text-gray-900 font-bold text-3xl mb-2 ">
                        {item.attributes.heading}
                      </h1>
                      <p className="text-slate-400 hover:text-sky-400 font-bold underline decoration-pink-500 text-xs mt-2">
                        {item.attributes.name}
                      </p>
                      <p>{descriptionText}</p>

                      {item.attributes.category && (
                        <h3 className=" font-bold my-5 text-lg ">
                          {Array.isArray(item.attributes.category)
                            ? item.attributes.category.join(", ")
                            : item.attributes.category}
                        </h3>
                      )}

                      {item.attributes.categoryDesc && (
                        <div className="text-base my-2">
                          {item.attributes.categoryDesc.map(
                            (
                              paragraph: { children: any[] },
                              index: React.Key | null | undefined // Added horizontal line between each paragraph
                            ) => (
                              <React.Fragment key={index}>
                                <p>
                                  {paragraph.children
                                    .map((child) => child.text)
                                    .join(" ")}
                                </p>
                                {index !==
                                  item.attributes.categoryDesc.length - 1 && (
                                  <hr className="my-3 border border-gray-300 mt-4 text-gray-600 text-lg" />
                                )}
                              </React.Fragment>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
