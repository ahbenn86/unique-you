import "./HomePractice.css";
import React from "react";

function HomePractice() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-6 position-relative">
            {/* <span className="red-square position-absolute"></span> */}
            <img src="/assets/red-cmp-square-1.svg" className="img-fluid position-absolute red-square" alt="#" />
            <img src="/assets/jumping-woman.svg" className="img-fluid jumping-woman position-absolute top-1 start-1" alt="#" />
          </div>
          <div className="col-6 col-md-6 pt-2 ps-5 d-flex flex-column align-items-center">
            <h1 className="fs-3 fw-light text-center pb-3">Welcome to Unique You!</h1>
            <p className="mt-4 p-4 shadow rounded paragraph w-75">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate illo, quis, commodi laudantium, quos iusto at minima
              facilis dolore praesentium nemo ullam voluptatum excepturi aliquam
              assumenda quasi ea. Consequuntur numquam sapiente reiciendis
              aliquid dolorem quidem vel cumque amet, minus inventore deserunt
              repudiandae sit blanditiis. Eaque, vero eligendi quaerat
              reprehenderit quasi rerum animi culpa quae velit. Esse excepturi
              voluptatem ut vel porro quia rem veniam ea suscipit, quidem
              corrupti a asperiores ullam deserunt neque nesciunt laboriosam
              beatae exercitationem. Dolorum asperiores odit explicabo nam
              repudiandae! Natus, facere atque fugit culpa dolores et beatae
              cumque illum deserunt tempora? Fugit, at? Accusamus, iusto quia
              veritatis facere nam dolor repellendus ab commodi labore, suscipit
              laboriosam, eius saepe voluptatum? Atque recusandae nisi dolorem
              consequatur accusamus quos quibusdam corporis vel magnam, ratione
              ad nobis veritatis reiciendis error dicta exercitationem quaerat
              at numquam voluptas! In explicabo minus ipsum molestias.
              Necessitatibus tenetur, porro ipsam voluptatibus illum rem aliquam
              similique?
            </p>
            <button className="btn btn-outline-primary mt-2" to="/services">See our services</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePractice;
