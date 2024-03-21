"use client";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const Homes = () => {
  const [data, setData] = useState<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "http://localhost:1337/api/banners?populate=*"
      );
      let response = data.data.data;
      setData(response);
      console.log(response);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="header">
        <div className=" overflow-hidden max-h-[575px] container mx-auto xl:mx-w-[1180px]">
          <Slider {...settings}>
            {data?.map((item: any, index: number) => {
              return (
                <>
                  <div>
                    <img
                      className="w-full h-auto bg-center rounded-lg mt-8"
                      src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Homes;
