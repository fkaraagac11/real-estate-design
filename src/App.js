import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import DropDown from "./components/Dropdown";
import { SliderData } from "./components/data/SliderData";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./components/data/InfoData";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="App">
            <GlobalStyle />
            <NavBar toggle={toggle} />
            <DropDown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
        </div>
    );
}

export default App;
