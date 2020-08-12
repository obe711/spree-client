import React from 'react';

const StoreSearch = () => {
    return ( 
        <div class="section">
        <div class="container">
          <h2 class="section-title">Find what you need</h2>
          <div class="row">
            <div class="col-md-3">
              <div class="card card-refine card-plain card-rose">
                <div class="card-body">
                  <h4 class="card-title">
                    Refine
                    <button
                      class="btn btn-default btn-fab btn-fab-mini btn-link pull-right"
                      rel="tooltip"
                      title=""
                      data-original-title="Reset Filter"
                    >
                      <i class="material-icons">cached</i>
                    </button>
                  </h4>
                  <div id="accordion" role="tablist">
                    <div class="card card-collapse">
                      <div class="card-header" role="tab" id="headingOne">
                        <h5 class="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Price Range
                            <i class="material-icons">keyboard_arrow_down</i>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div class="card-body card-refine">
                          <span
                            id="price-left"
                            class="price-left pull-left"
                            data-currency="€"
                            >€42</span
                          >
                          <span
                            id="price-right"
                            class="price-right pull-right"
                            data-currency="€"
                            >€880</span
                          >
                          <div class="clearfix"></div>
                          <div
                            id="sliderRefine"
                            class="slider slider-rose noUi-target noUi-ltr noUi-horizontal"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-collapse">
                      <div class="card-header" role="tab" id="headingTwo">
                        <h5 class="mb-0">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Clothing
                            <i class="material-icons">keyboard_arrow_down</i>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div class="card-body">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                checked
                              />
                              Blazers
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Casual Shirts
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Formal Shirts
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Jeans
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Polos
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Pyjamas
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Shorts
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Trousers
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-collapse">
                      <div class="card-header" role="tab" id="headingThree">
                        <h5 class="mb-0">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Designer
                            <i class="material-icons">keyboard_arrow_down</i>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div class="card-body">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                checked
                              />
                              All
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Polo Ralph Lauren
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Wooyoungmi
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Alexander McQueen
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Tom Ford
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              AMI
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Berena
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Thom Sweeney
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Burberry Prorsum
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Calvin Klein
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Kingsman
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Club Monaco
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Dolce &amp; Gabbana
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Gucci
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Biglioli
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Lanvin
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Loro Piana
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Massimo Alba
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-collapse">
                      <div class="card-header" role="tab" id="headingFour">
                        <h5 class="mb-0">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Colour
                            <i class="material-icons">keyboard_arrow_down</i>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                      >
                        <div class="card-body">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                checked
                              />
                              All
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Black
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Blue
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Brown
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Gray
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Green
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Neutrals
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                              Purple
                              <span class="form-check-sign">
                                <span class="check"></span>
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
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-1.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Polo Ralph Lauren</h4>
                      </a>
                      <p class="description">
                        Impeccably tailored in Italy from lightweight navy wool.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price"> € 800</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Remove from wishlist"
                      >
                        <i class="material-icons">favorite</i>
                      </button>
                    </div>
                  </div>
                
                </div>
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-2.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Wooyoungmi</h4>
                      </a>
                      <p class="description">
                        Dark-grey slub wool, pintucked notch lapels.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price">€ 555</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Add to wishlist"
                      >
                        <i class="material-icons">favorite_border</i>
                      </button>
                    </div>
                  </div>
                 
                </div>
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-3.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Tom Ford</h4>
                      </a>
                      <p class="description">
                        Immaculate tailoring is TOM FORD's forte.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price"> € 879</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Add to wishlist"
                      >
                        <i class="material-icons">favorite_border</i>
                      </button>
                    </div>
                  </div>
               
                </div>
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-4.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Thom Sweeney</h4>
                      </a>
                      <p class="description">
                        It's made from lightweight grey wool woven.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price"> € 680</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Add to wishlist"
                      >
                        <i class="material-icons">favorite_border</i>
                      </button>
                    </div>
                  </div>
                 
                </div>
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-5.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Kingsman</h4>
                      </a>
                      <p class="description">
                        Crafted from khaki cotton and fully canvassed.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price"> € 725</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Remove from wishlist"
                      >
                        <i class="material-icons">favorite</i>
                      </button>
                    </div>
                  </div>
                
                </div>
                <div class="col-md-4">
                  <div
                    class="card card-product card-plain no-shadow"
                    data-colored-shadow="false"
                  >
                    <div class="card-header card-header-image">
                      <a href="#">
                        <img
                          src="../assets/img/examples/suit-6.jpg"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href="#">
                        <h4 class="card-title">Boglioli</h4>
                      </a>
                      <p class="description">
                        Masterfully crafted in Northern Italy.
                      </p>
                    </div>
                    <div class="card-footer justify-content-between">
                      <div class="price-container">
                        <span class="price">€ 699</span>
                      </div>
                      <button
                        class="btn btn-rose btn-link btn-fab btn-fab-mini btn-round pull-right"
                        rel="tooltip"
                        title=""
                        data-placement="left"
                        data-original-title="Add to wishlist"
                      >
                        <i class="material-icons">favorite_border</i>
                      </button>
                    </div>
                  </div>
                  
                </div>
                <div class="col-md-3 ml-auto mr-auto">
                  <button
                    rel="tooltip"
                    class="btn btn-rose btn-round"
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
}
 
export default StoreSearch;