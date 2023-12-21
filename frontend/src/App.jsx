import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Apod from "./pages/Apod";

import GalleryPage from "./pages/GalleryPage";



const App = () => {
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/apod" element={<Apod />}></Route>
        <Route path="/saved-images" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
