import React from "react";
import newsLetterImg from "../../../assets/spree/img/newsletter.jpg";

const NewsLetter = () => {
  return (
    <div
      className="subscribe-line subscribe-line-image"
      data-parallax="true"
      style={{ backgroundImage: `url('${newsLetterImg}')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="text-center">
              <h3 className="title">Subscribe to our Newsletter</h3>
              <p className="description">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </div>
            <div className="card card-raised card-form-horizontal">
              <div className="card-body">
                <form method="" action="">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">mail</i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email..."
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <button type="button" className="btn btn-rose btn-block">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
