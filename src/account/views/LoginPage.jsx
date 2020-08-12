import React from 'react';
import NavBarPublic from "../../_components/page/NavBarPublic";
import loginBG from "../../assets/spree/img/loginBG.jpg";
import {Login} from "../Login";

const LoginPage = (props) => {
    return (  
        <body>
           
        <div
        className="page-header header-filter"
        style={{
          backgroundImage: `url('${loginBG}')`,
          backgroundSize: "cover",
          backgroundPosition: "top center"}}>

            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                    <Login  {...props}/>
                    </div>
                </div>

   
            </div>
        </div>
        <footer class="footer">
            <div class="container">
            <nav class="float-left">
            <ul>
              <li>
                <a href="home.html">
                  Spree Programs
                </a>
              </li>
              <li>
                <a href="about.html">
                  About
                </a>
              </li>
              <li>
                <a href="contact.html">
                  Contact
                </a>
              </li>
              <li>
                <a href="store.html">
                  Store
                </a>
              </li>
              <li>
                <a href="enroll.html">
                  Enroll
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear());
            </script>
            , made with <i class="material-icons">favorite</i> by
            <a href="https://www.spreeprograms.com" target="_blank"
              >Spree Programs</a
            >
            for a better future.
          </div>
            </div>
        </footer>
        </body>
    );
}
 
export default LoginPage;