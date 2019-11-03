import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/xbjreeyn"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="first name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="message"
              ></textarea>
            </div>
            <div className="form-group my-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
