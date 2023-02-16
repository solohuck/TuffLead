import React from "react";
import Head from '../components/Header';
import Foot from '../components/Footer';
import SubscriptionMenu from "../components/SubscriptionsMenu";

const Home = () => {
  return (
    <div>
      <Head />
      <SubscriptionMenu />
      <Foot />
    </div>
  );
};

export default Home;