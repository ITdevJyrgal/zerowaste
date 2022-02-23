import './App.css';
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import AboutUs from "./components/aboutUs/AboutUs"
import Services from "./components/services/Services"
import Job from "./components/job/Job"
import Out from "./components/our/Our"
import Reviews from "./components/reviews/Reviews"
import "./style/Style.scss"


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
        </div>
    );
}

export default App;
