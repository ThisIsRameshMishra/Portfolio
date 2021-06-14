import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/img1.png"

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="main">
                    Welcome!
                    <strong className="brand-name">This is Ramesh Mishra</strong>
                  </h1>
                  <h2 className="my-3">I am a software Developer</h2>
                  <div className="mt-3">
                    <NavLink to="./service" className="btn-get-started">
                      Start Learning
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="https://www.import.io/wp-content/uploads/2018/04/Rocket-icon-blue-1-300x300.png"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>
      
    


      
    
    </>
  );
};
export default Home;
