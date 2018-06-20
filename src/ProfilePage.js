import React from "react";
import "normalize.css";
import "flexboxgrid2";
import Header from "./Header";
import Canopy from "./Canopy";
import Container from "./Container";
import Sidebar from "./Sidebar";
import Statsbar from "./Statsbar";

const ProfilePage = props => (
  <div>
    <Header />
    <Canopy />
    <Statsbar />
    <Container>
      <div className="col-lg-3">
        <Sidebar />
      </div>
      <div className="col-lg-6" />
    </Container>
  </div>
);

export default ProfilePage;
