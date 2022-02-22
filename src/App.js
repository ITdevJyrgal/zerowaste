import './App.css';
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import "./style/Style.scss"


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <About/>
        </div>
    );
}

export default App;
