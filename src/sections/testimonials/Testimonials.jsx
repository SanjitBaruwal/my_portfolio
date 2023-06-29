import "./Testimonials.css";
import data from "./data";

// import Swiper core and required modules
import { Pagination, Autoplay, EffectCards } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
// import "swiper/css/effect-cards";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay, EffectCards]}
        effect={"cards"}
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="testimonial">
            <div className="client__avatar">
              <img src={item.image} alt="" />
            </div>
            <h5 className="client__name">{item.clientName}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
