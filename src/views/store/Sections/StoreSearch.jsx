import React from "react";

const StoreSearch = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Find what you need</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card card-refine card-plain card-rose">
              <div className="card-body">
                <h4 className="card-title">
                  Refine
                  <button
                    className="btn btn-default btn-fab btn-fab-mini btn-link pull-right"
                    rel="tooltip"
                    title=""
                    data-original-title="Reset Filter"
                  >
                    <i className="material-icons">cached</i>
                  </button>
                </h4>
                <div id="accordion" role="tablist">
                  <div className="card card-collapse">
                    <div className="card-header" role="tab" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Price Range
                          <i className="material-icons">keyboard_arrow_down</i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body card-refine">
                        <span
                          id="price-left"
                          className="price-left pull-left"
                          data-currency="€"
                        >
                          €42
                        </span>
                        <span
                          id="price-right"
                          className="price-right pull-right"
                          data-currency="€"
                        >
                          €880
                        </span>
                        <div className="clearfix"></div>
                        <div
                          id="sliderRefine"
                          className="slider slider-rose noUi-target noUi-ltr noUi-horizontal"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-collapse">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Clothing
                          <i className="material-icons">keyboard_arrow_down</i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              checked
                            />
                            Blazers
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Casual Shirts
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Formal Shirts
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Jeans
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Polos
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Pyjamas
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Shorts
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Trousers
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-collapse">
                    <div className="card-header" role="tab" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Designer
                          <i className="material-icons">keyboard_arrow_down</i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              checked
                            />
                            All
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Polo Ralph Lauren
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Wooyoungmi
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Alexander McQueen
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Tom Ford
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            AMI
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Berena
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Thom Sweeney
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Burberry Prorsum
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Calvin Klein
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Kingsman
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Club Monaco
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Dolce &amp; Gabbana
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Gucci
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Biglioli
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Lanvin
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Loro Piana
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Massimo Alba
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-collapse">
                    <div className="card-header" role="tab" id="headingFour">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Colour
                          <i className="material-icons">keyboard_arrow_down</i>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              checked
                            />
                            All
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Black
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Blue
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Brown
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Gray
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Green
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Neutrals
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Purple
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-1.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Polo Ralph Lauren</h4>
                    </a>
                    <p className="description">
                      Impeccably tailored in Italy from lightweight navy wool.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price"> € 800</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Remove from wishlist"
                    >
                      <i className="material-icons">favorite</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-2.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Wooyoungmi</h4>
                    </a>
                    <p className="description">
                      Dark-grey slub wool, pintucked notch lapels.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price">€ 555</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Add to wishlist"
                    >
                      <i className="material-icons">favorite_border</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-3.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Tom Ford</h4>
                    </a>
                    <p className="description">
                      Immaculate tailoring is TOM FORD's forte.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price"> € 879</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Add to wishlist"
                    >
                      <i className="material-icons">favorite_border</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-4.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Thom Sweeney</h4>
                    </a>
                    <p className="description">
                      It's made from lightweight grey wool woven.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price"> € 680</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Add to wishlist"
                    >
                      <i className="material-icons">favorite_border</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-5.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Kingsman</h4>
                    </a>
                    <p className="description">
                      Crafted from khaki cotton and fully canvassed.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price"> € 725</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Remove from wishlist"
                    >
                      <i className="material-icons">favorite</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card card-product card-plain no-shadow"
                  data-colored-shadow="false"
                >
                  <div className="card-header card-header-image">
                    <a href="#">
                      <img src="../assets/img/examples/suit-6.jpg" alt="..." />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Boglioli</h4>
                    </a>
                    <p className="description">
                      Masterfully crafted in Northern Italy.
                    </p>
                  </div>
                  <div className="card-footer justify-content-between">
                    <div className="price-container">
                      <span className="price">€ 699</span>
                    </div>
                    <button
                      className="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                      rel="tooltip"
                      title=""
                      data-placement="left"
                      data-original-title="Add to wishlist"
                    >
                      <i className="material-icons">favorite_border</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ml-auto mr-auto">
                <button
                  rel="tooltip"
                  className="btn btn-rose btn-round"
                  data-original-title=""
                  title=""
                >
                  Load more...
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default StoreSearch;
