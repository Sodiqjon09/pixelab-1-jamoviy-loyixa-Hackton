import React from "react";
import Clients from "../Clients/Clients";
import Service from "../service/Service";
import Card from "../Meet/Card";
import Footer from "../Footer/Footer";
import Explore from "../explore/Explore";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Explore />
      <Service />
      <Clients />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
