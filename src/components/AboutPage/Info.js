import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about store"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              aspernatur sunt corporis excepturi aut vitae voluptates quisquam
              iure perspiciatis. Quaerat!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              aspernatur sunt corporis excepturi aut vitae voluptates quisquam
              iure perspiciatis. Quaerat!
            </p>
            <button className="main-link" type="button">
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
