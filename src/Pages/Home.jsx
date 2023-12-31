import React, { Fragment } from "react";
import { TopNavbar, Footer, HeaderSlider, AllCatigories } from "../Components";

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCatigories />
      <Footer />
    </Fragment>
  );
};

export default Home;
