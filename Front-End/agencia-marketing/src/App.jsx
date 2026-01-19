import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Screens/ProductPage";
import Home from "./Screens/Home";
/* import Courses from "./pages/Courses";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
       {/*  <Route path="/courses" element={<Courses />} />
        <Route path="/Product" element={<Journal />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
