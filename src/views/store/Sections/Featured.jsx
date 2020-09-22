import React from "react";

const Featured = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Latest Offers</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-product card-plain">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img src="../assets/img/examples/gucci.jpg" alt="" />
                </a>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title">
                  <a href="#pablo">Gucci</a>
                </h4>
                <p className="card-description">
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </div>
              <div className="card-footer">
                <div className="price-container">
                  <span className="price price-old"> €1,430</span>
                  <span className="price price-new"> €743</span>
                </div>
                <div className="stats ml-auto">
                  <button
                    type="button"
                    rel="tooltip"
                    title=""
                    className="btn btn-just-icon btn-link btn-rose"
                    data-original-title="Saved to Wishlist"
                  >
                    <i className="material-icons">favorite</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-product card-plain">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img src="../assets/img/examples/dolce.jpg" alt="" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Dolce &amp; Gabbana</h4>
                <p className="card-description">
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </div>
              <div className="card-footer">
                <div className="price-container">
                  <span className="price price-old"> €1,430</span>
                  <span className="price price-new">€743</span>
                </div>
                <div className="stats ml-auto">
                  <button
                    type="button"
                    rel="tooltip"
                    title=""
                    className="btn btn-just-icon btn-link btn-rose"
                    data-original-title="Saved to Wishlist"
                  >
                    <i className="material-icons">favorite</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-product card-plain">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img src="../assets/img/examples/tom-ford.jpg" alt="" />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Dolce &amp; Gabbana</h4>
                <p className="card-description">
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </div>
              <div className="card-footer">
                <div className="price-container">
                  <span className="price price-old"> €1,430</span>
                  <span className="price price-new">€743</span>
                </div>
                <div className="stats ml-auto">
                  <button
                    type="button"
                    rel="tooltip"
                    title=""
                    className="btn btn-just-icon btn-link btn-rose"
                    data-original-title="Saved to Wishlist"
                  >
                    <i className="material-icons">favorite</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
