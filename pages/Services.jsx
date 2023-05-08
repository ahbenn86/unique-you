import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import "./Services.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ServicesGif from '/assets/services/services-2.gif'
import WordpressImg from '/assets/services/wordpress-logo-2.svg'
import SmileLogo from '/assets/services/smile-logo-2.svg'
import SeoImg from '/assets/services/seo-2.svg'
import WorkshopImg from '/assets/services/workshop-3.svg'

function Services() {
  return (
    <>
      <Helmet>
      <title>Website services | Branding & development for your business</title>
        <meta
          name="description"
          content="Have your website created by Unique You including your brand and logo design plus SEO practices to have your business found by your favorite search engine."
        />
        <meta
          name="keywords"
          content="website development services,website services,web development company,web design services,web development solutions,custom web development,responsive web design,ecommerce website development,web application development,professional web designers,website maintenance services,seo optimized websites,unique website services"
        />
      </Helmet>
      <h1 className="fs-3 fw-light text-center" style={{textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "1px"}}>Website Services</h1>
      <div className="services-container">
        <div className="services-section-1">
        <img
          src={ServicesGif}
          style={{ width: "20rem", height: "15rem" }}
          className="img-fluid services-gif"
          alt="Agency professionals completing different services for your website."
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
                src={WordpressImg}
                alt="Wordpress logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SmileLogo}
                alt="A logo design by Unique You."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SeoImg}
                alt="All the different components of seo services."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={WorkshopImg}
                alt="Woman participating in a unique you workshop for web development training."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        <div className="services-section-2">
        <p className="p-4 shadow rounded paragraph-services">
                  We offer a host of different services from regular website
                  maintenance and enhancements to one-on-one{" "}
                  <Link to="/web-development-training" style={{ textDecoration: "none" }}>
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
                <Link to="/website-packages">
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
