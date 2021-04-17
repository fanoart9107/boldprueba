import React from "react";

//pages
import MiNegocio from "./pages/MiNegocio";
import Ayuda from "./pages/Ayuda";

// Components
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={MiNegocio} />
    <Route exact path="/ayuda" component={Ayuda} />
  </BrowserRouter>
);

export default App;
