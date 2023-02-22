import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import GetUlego from "./pages/getUlego/GetUlego";
import { Home } from "./pages/home";
import OurProduct from "./pages/ourproduct/OurProduct";
import Support from "./pages/support/Support";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="our-product" element={<OurProduct />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="support" element={<Support />} />
            <Route path="get-ulego" element={<GetUlego />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
