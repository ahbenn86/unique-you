import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="non-mobile">
        <div className="container-fluid">
          <div className="d-flex elements-container">
            <img
              src="/assets/jumping-woman.svg"
              alt="#"
              className="img-fluid jumping-woman"
            />
            <img
              src="/assets/red-cmp-rect-1.svg"
              alt="#"
              className="img-fluid red-rect"
            />
            <img
              src="/assets/black-cmp-rect-1.svg"
              alt="#"
              className="img-fluid black-rect"
            />
            <img
              src="/assets/red-cmp-square-1.svg"
              alt="#"
              className="img-fluid red-square"
            />
            <p className="container-fluid paragraph-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              magni impedit, libero placeat earum accusamus expedita soluta
              possimus iure suscipit rem eaque hic fugiat omnis doloribus.
              Veritatis officia fugit corrupti, quasi reiciendis animi,
              perspiciatis nobis sunt commodi fuga natus quibusdam! Asperiores
              eos animi impedit cum iure architecto minima beatae harum facilis
              recusandae ea mollitia sit commodi voluptate id illo itaque, nisi,
              eius voluptatum illum a ullam? Voluptatibus architecto voluptatem
              earum maxime sequi ex inventore voluptate nesciunt sit quas sed
              fugiat sunt fugit, mollitia ipsa aliquid expedita dignissimos
              deserunt hic! Quae blanditiis vel debitis quaerat recusandae
              itaque fugiat ducimus, veniam officia enim labore totam, rerum
              temporibus ut expedita! Saepe provident excepturi temporibus
              cumque voluptatem alias inventore soluta, odit autem mollitia.
              Tempore quos aliquid ullam eveniet doloribus possimus at suscipit
              ducimus ut nobis. Molestiae, culpa esse ea qui corporis obcaecati
              nisi dolorem veniam consequatur fuga ex, quasi vero labore,
              deserunt laborum exercitationem.
            </p>
          </div>
        </div>
      </section>
      <section className="mobile-view">
        <img
          src="/assets/jumping-woman.svg"
          alt="#"
          className="img-fluid jumping-woman"
        />
        <div className="container-fluid">
          <img
            src="/assets/red-cmp-rect-1.svg"
            alt="#"
            className="img-fluid red-rect"
          />
          <img
            src="/assets/black-cmp-rect-1.svg"
            alt="#"
            className="img-fluid black-rect"
          />
          <img
            src="/assets/red-cmp-square-1.svg"
            alt="#"
            className="img-fluid red-square"
          />
          <img
            src="/assets/black-cmp-square-1.svg"
            alt="#"
            className="img-fluid black-square"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
