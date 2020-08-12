import React from 'react';
import StoreHeader from "./Sections/StoreHeader";
import Featured from "./Sections/Featured";
import NewsLetter from "./Sections/NewsLetter";
import NavBarPublic from "../../_components/page/NavBarPublic";
import StoreSearch from "./Sections/StoreSearch";
import Footer from "../../_components/page/Footer";

const Store = () => {
    return ( 
        <body className="sidebar-collapse">
        <div className="ecommerce-page">
            <NavBarPublic />
        <StoreHeader />
        <div class="main main-raised">
        <Featured />
        <StoreSearch />
        <NewsLetter />
        </div>
       
        </div>
        <Footer />
        </body>
     );
}
 
export default Store;