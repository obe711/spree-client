import React from "react";

import storeHeaderImg from "../../../assets/spree/img/storeHeader.jpg";

const StoreHeader = () => {
  return (
    <div
      className="page-header header-filter header-small"
      data-parallax="true"
      style={{ backgroundImage: `url('${storeHeaderImg}')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <div className="brand">
              <h1 className="title">Spree Store</h1>
              <h4>
                Free global delivery for all products. Use coupon
                <b>25summer</b> for an extra 25% Off
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
