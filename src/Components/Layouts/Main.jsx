import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <div className="my-5 bg-dark">
            <Cards></Cards>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;