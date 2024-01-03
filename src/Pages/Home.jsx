import React, { Fragment } from "react";
import { TopNavbar, Footer, HeaderSlider, AllCatigories } from "../Components";

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCatigories />
      <div className="mb-5 pb-5"></div>
      <div className="mb-5 pb-5"></div>
      <Footer />
    </Fragment>
  );
};

export default Home;
