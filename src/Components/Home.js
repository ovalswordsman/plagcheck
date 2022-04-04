import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/home.css";
const Home = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/guest");
  };
  return (
    <section className="home-section">
      <p>Welcome to </p>
      <h1 class="title">PlagCheck</h1>
      <Button class="guest" onClick={clickHandler}>
        <li>Use as Guest</li>
      </Button>
    </section>
  );
};

export default Home;
