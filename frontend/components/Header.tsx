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
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/banners?populate=*"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="container mx-auto max-w-[1180px]">
        <Slider {...settings}>
          {data?.map((item: any, index: number) => (
            <div key={index}>
              <img
                className="w-full h-auto bg-center rounded-lg mt-8 max-h-[585px] md:max-h-[560px]"
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Homes;
