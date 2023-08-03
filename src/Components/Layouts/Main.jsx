import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Outlet></Outlet>
      <div className="my-5 bg-dark">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Main;
