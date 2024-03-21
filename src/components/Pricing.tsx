import { RxCheckCircled } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/pricing.module.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Feature {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface PricingItem {
  category: string;
  price: string;
  features: Feature[];
}

const Pricing = () => {
  const pricings: PricingItem[] = [
    {
      category: "Beginner",
      price: "10.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
    {
      category: "Premium",
      price: "20.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
    {
      category: "Business",
      price: "30.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 650,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <section className={style.pricing}>
      <h2>Transparent Pricing</h2>
      <h5>No hidden fees. no commission fees. no suprises</h5>
      <div className={style.plans}>
        <Slider {...settings}>
          {pricings.map((plans, i) => (
            <div className={style.card} key={i}>
              <h3>{plans.category}</h3>
              <div className={style.prices}>
                <span className={style.currency}>$</span>
                {plans.price} <span className={style.duration}>/month</span>
              </div>
              <button className={style.btn}>Buy Now</button>
              <div className={style.features}>
                {plans.features.map((features, i) => (
                  <span className={style.feat} key={i}>
                    <features.icon className={style.icon} />
                    {features.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {/* <div className={style.mobile}>
          <Carousel
            centerMode={true}
            showArrows={false}
            autoPlay={false}
            showStatus={false}
          >
            {pricings.map((plans, i) => (
              <div className={style.card} key={i}>
                <h3>{plans.category}</h3>
                <div className={style.prices}>
                  <span className={style.currency}>$</span>
                  {plans.price} <span className={style.duration}>/month</span>
                </div>
                <button className={style.btn}>Buy Now</button>
                <div className={style.features}>
                  {plans.features.map((features, i) => (
                    <span className={style.feat} key={i}>
                      <features.icon className={style.icon} />
                      {features.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Pricing;
