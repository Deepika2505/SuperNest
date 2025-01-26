import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './../styles/SlidingCard.css';

const SlidingCard = () => {
  const slides = [
    {
      title: 'Purchase properties up to 10x faster with SuperNest',
      description: 'Find your perfect thriving, lively place to call home. Browse hundreds of dorms, hostels, and rental properties ready to move in.',
      background: 'url("https://s3-alpha-sig.figma.com/img/30d9/179d/a5cce2ae8b0fd7f045cd04611301b353?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np7Fhn3m~qShKVq8PM03U~MRmsS1wAfz3b59r8Xe1N5O4ziPItkzNPj1P-FWDImnJ2-63LQE7WaU4clwkbMC3tuTlTjL4IcsDfMsoaNP3PKgKlgtUM8SvKpcT34ZSX8NrtnjLYw2l9AzKkNXDyYqGt93yYq3KwZb0jMuNXbGk-OHJ9547HtEH4MLzKjJewtg2KycRklMMyNXvWkzCNUjw09ulx9mMy-ktWfrnKNd04vn1vQ7LYm4LGudP7Em2KQ4Hes1YIYAyIhiXumMdpiHhEUMzsZUjRvGdWHmfVV0mo2gov7CNjzUbe-FT7pBOY6DA0e3HKL3R4LhNnc7GsRezg__")', // Replace with image path
    },
    {
      title: 'Explore verified properties',
      description: 'SuperNest ensures all properties are verified to make your journey seamless.',
      background: 'url("https://s3-alpha-sig.figma.com/img/30d9/179d/a5cce2ae8b0fd7f045cd04611301b353?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np7Fhn3m~qShKVq8PM03U~MRmsS1wAfz3b59r8Xe1N5O4ziPItkzNPj1P-FWDImnJ2-63LQE7WaU4clwkbMC3tuTlTjL4IcsDfMsoaNP3PKgKlgtUM8SvKpcT34ZSX8NrtnjLYw2l9AzKkNXDyYqGt93yYq3KwZb0jMuNXbGk-OHJ9547HtEH4MLzKjJewtg2KycRklMMyNXvWkzCNUjw09ulx9mMy-ktWfrnKNd04vn1vQ7LYm4LGudP7Em2KQ4Hes1YIYAyIhiXumMdpiHhEUMzsZUjRvGdWHmfVV0mo2gov7CNjzUbe-FT7pBOY6DA0e3HKL3R4LhNnc7GsRezg__")', // Replace with image path
    },
    {
      title: 'Find your dream rental',
      description: 'A single platform to find rentals that fit your budget and style.',
      background: 'url("https://s3-alpha-sig.figma.com/img/30d9/179d/a5cce2ae8b0fd7f045cd04611301b353?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np7Fhn3m~qShKVq8PM03U~MRmsS1wAfz3b59r8Xe1N5O4ziPItkzNPj1P-FWDImnJ2-63LQE7WaU4clwkbMC3tuTlTjL4IcsDfMsoaNP3PKgKlgtUM8SvKpcT34ZSX8NrtnjLYw2l9AzKkNXDyYqGt93yYq3KwZb0jMuNXbGk-OHJ9547HtEH4MLzKjJewtg2KycRklMMyNXvWkzCNUjw09ulx9mMy-ktWfrnKNd04vn1vQ7LYm4LGudP7Em2KQ4Hes1YIYAyIhiXumMdpiHhEUMzsZUjRvGdWHmfVV0mo2gov7CNjzUbe-FT7pBOY6DA0e3HKL3R4LhNnc7GsRezg__")', // Replace with image path
    },
  ];

  return (
    <div className="sliding-cards-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="card"
              style={{
                backgroundImage: slide.background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="card-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingCard;
