import './App.css';
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import AboutUs from "./components/aboutUs/AboutUs"
import "./style/Style.scss"


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <About/>
            <AboutUs/>
        </div>
    );
}

export default App;
