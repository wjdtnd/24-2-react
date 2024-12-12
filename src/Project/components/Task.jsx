import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import CardContainer from "./CardContainer";
import '../Task.css';
import Calculator from "./Calculator";
import Clock from "./Clock";
import CurrencyExchange from "./CurrencyExchange";

function Task() {
    return (
        <div className="background">
            <div className="App-container">
                <div className="sidebar">
                    <CurrencyExchange />
                </div>

                <div className="main-content">
                    <Header />
                    <Hero />
                    <Calculator />
                    <CardContainer/>
                    <Clock />
                </div>
            </div>
        </div>
    );
}

export default Task;
