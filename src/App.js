import React from "react";
//Global styled
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <GlobalStyle />
            <AboutUs />
        </div>
    );
}

export default App;
