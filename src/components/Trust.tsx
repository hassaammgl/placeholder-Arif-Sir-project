import style from "../styles/trust.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface commentInterface {
  comment: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stars: number;
  description: string;
  author: string;
}

const Trust = () => {
  const comments: commentInterface[] = [
    {
      comment: "It helped me alot with my channels",
      stars: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 2.7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
    {
      comment: "It helped me alot with my channels",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis blandit eget pharetra, neque sodales sit interdum nulla maur",
      author: "Milton Austin",
    },
  ];
  return (
    <section className={style.trust}>
      <h1>Thousand of user trust US</h1>
      <h3>
        Our goal is your success.We do our best to make your mission easy and
        save time.
      </h3>
      <div className={style.silder}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {comments.map((comment, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={style.slides}>
                  <h4>{comment.comment}</h4>
                  <StarRatings
                    rating={comment.stars}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name="rating"
                  />
                  <p>{comment.description}</p>
                  <span>{comment.author}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className={style.free_trail}>Start Free trial</button>
      </div>
    </section>
  );
};

export default Trust;
