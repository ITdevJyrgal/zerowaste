import './App.css';
import "./style/Style.scss"
import React from "react";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Job from "./components/job/Job";
import Out from "./components/our/Our";
import Reviews from "./components/reviews/Reviews";
import Question from "./components/question/Question";
import Footer from "./components/footer/Footer"
import {Routes, Route} from "react-router-dom"
import Bas from "./pages/bas/Bas";
import Poli from "./pages/poli/Poli";

function App() {
    return (
        <div className="App">

            <Header/>
            <Hero/>
            <About/>
            <AboutUs/>
            <Services/>
            <Job/>
            <Out/>
            <Reviews/>
            <Question/>
            <Footer/>

        </div>
    );
}

export default App;
