
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";
import { Outlet } from "react-router-dom";
const Mainpart = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
     
      <div className="my-5 bg-dark">
      <Outlet></Outlet>
        <Cards></Cards>
      </div>
      
    </div>
  );
};

export default Mainpart;
