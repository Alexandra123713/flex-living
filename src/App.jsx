import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Nav";
import WeRent from "./components/WeRent";
import Search from "./components/SearchBar";
import TheFuture from "./components/TheFuture";
import IdAliquam from "./components/IdAliquam";

const BcgImage = styled.div`
  margin: auto;
  margin-bottom: 170px;
  max-width: 1440px;
  height: 767px;
  background: url(../src/images/bcg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const App = () => {
  return (
    <div>
      <Navbar />
      <BcgImage>
        <WeRent />
        <Search />
      </BcgImage>
      <TheFuture />
      <IdAliquam />
    </div>
  );
};

export default App;
