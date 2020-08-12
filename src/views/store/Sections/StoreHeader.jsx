import React from 'react';

import storeHeaderImg from "../../../assets/spree/img/storeHeader.jpg"

const StoreHeader = () => {
    return ( 
        <div
        class="page-header header-filter header-small"
        data-parallax="true"
        style={{backgroundImage: `url('${storeHeaderImg}')`}}>
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <div class="brand">
                <h1 class="title">Spree Store</h1>
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
}
 
export default StoreHeader;