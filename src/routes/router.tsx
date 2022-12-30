import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBarContainer from "../Container/SideBarContainer";
import Etc from "./pages/Etc";
import Gasture from "./pages/Gasture";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Slider from "./pages/Slider";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SideBarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Gasture" element={<Gasture />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Etc" element={<Etc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
