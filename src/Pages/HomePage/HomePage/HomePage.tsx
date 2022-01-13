import React from "react";
import Banner from "../Banner/Banner";
import Feedback from '../Feedback/Feedback';
import Service from '../Services/Service';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Feedback></Feedback>
    </div>
  );
};

export default HomePage;
