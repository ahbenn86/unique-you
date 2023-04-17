import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import "./Services.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Squarespace | Wordpress | SEO | New York, NY.</title>
        <meta
          name="description"
          content="Have your website created by Unique You including your brand and logo design plus SEO practices to have your business found by your favorite search engine."
        />
        <meta
          name="keywords"
          content="Squarespace, Wordpress, Website, Build, SEO, Logo, Brand, Design, Workshops"
        />
      </Helmet>
      <h1 className="fs-3 fw-light text-center">Our services</h1>
      <div className="services-container">
        <div className="services-section-1">
        <img
          src="/assets/services/services.gif"
          style={{ width: "20rem", height: "15rem" }}
          className="img-fluid services-gif"
          alt=""
        />
        <div>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/assets/services/wordpress-logo.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/services/smile-logo.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/services/seo.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/services/workshop-2.svg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        <div className="services-section-2">
        <p className="p-4 shadow rounded paragraph-services">
                  We offer a host of different services from regular website
                  maintenance and enhancements to one-on-one{" "}
                  <Link to="/workshops" style={{ textDecoration: "none" }}>
                    workshops
                  </Link>
                  . We can enhance your current{" "}
                  <a
                    href="https://www.squarespace.com/"
                    className="external-link"
                    target="_blank"
                  >
                    Squarespace
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wordpress.com/"
                    className="external-link"
                    target="_blank"
                  >
                    WordPress
                  </a>{" "}
                  website or create your very first website from the ground up
                  along with creating the logo for your brand and ensuring that
                  your business is found within search results such as Google.
                </p>
                <div className="button-container">
                <Link to="/contact">
                  <button className="btn btn-primary mt-2">Contact Us</button>
                </Link>
                <Link to="/websites">
                  <button className="btn btn-primary mt-2 btn-2">
                    Website Packages
                  </button>
                </Link>
                </div>
        </div>
      </div>
    </>
  );
}

export default Services;
