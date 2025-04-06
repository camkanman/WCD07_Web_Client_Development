import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,          // Memperlambat kecepatan animasi
    slidesToShow: 3,
    slidesToScroll: 1,    // Mengubah ke 1 untuk scroll satu per satu
    autoplay: true,
    autoplaySpeed: 0,     // Set ke 0 untuk berputar tanpa jeda
    cssEase: "linear",    // Animasi linear untuk perputaran smooth
    pauseOnHover: false,  // Disable pause on hover
    rtl: false,  // First slider moves left to right
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 3000,          // Memperlambat kecepatan animasi
    slidesToShow: 3,
    slidesToScroll: 1,    // Mengubah ke 1 untuk scroll satu per satu
    autoplay: true,
    autoplaySpeed: 0,     // Set ke 0 untuk berputar tanpa jeda
    cssEase: "linear",    // Animasi linear untuk perputaran smooth
    pauseOnHover: false,  // Disable pause on hover
    rtl: true,  // First slider moves left to right
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slides = [
    {
      id: 1,
      image: '/images/img1.jpg',
      title: 'Consistent metrics',
      description: 'Explorable in minutes'
    },
    {
      id: 2,
      image: '/images/img2.jpg',
      title: 'Build real-time data',
      description: 'Visit the website'
    },
    {
      id: 3,
      image: '/images/img3.jpg',
      title: 'Who\'s there?',
      description: 'Interactive experience'
    },
  ];

  const slides2 = [
    {
      id: 4,
      image: '/images/img4.jpg',
      title: 'Data Analytics',
      description: 'Powerful insights'
    },
    {
      id: 5,
      image: '/images/img5.jpg',
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure'
    },
    {
      id: 6,
      image: '/images/img6.jpg',
      title: 'AI Integration',
      description: 'Smart automation'
    },
  ];

  return (
    <div className="sliders-wrapper" style={{ padding: '40px' }}>
      <div className="slider-container mb-12">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item" style={{ padding: '0 10px' }}>
              <div style={{
                margin: '0 auto',
                padding: '20px',
                background: '#C7D0D9',
                borderRadius: '8px',
                height: '300px',
                width: '95%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={slide.image} 
                  style={{
                    width: '80%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-container">
        <Slider {...settings2}>
          {slides2.map((slide) => (
            <div key={slide.id} className="slide-item" style={{ padding: '0 10px' }}>
              <div style={{
                margin: '0 auto',
                padding: '20px',
                background: '#C7D0D9',
                borderRadius: '8px',
                height: '300px',
                width: '95%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src={slide.image} 
                  style={{
                    width: '80%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
