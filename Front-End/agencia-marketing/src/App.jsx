import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import ProductPage from "./Screens/ProductPage";
=======
import Courses from "./Screens/Courses";
>>>>>>> Stashed changes
=======
import Courses from "./Screens/Courses";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Route path="/product" element={<ProductPage />} />
       {/*  <Route path="/courses" element={<Courses />} />
        <Route path="/Product" element={<Journal />} />
=======
=======
>>>>>>> Stashed changes
        <Route path="/courses" element={<Courses />} />
       {/*  
        <Route path="/journal" element={<Journal />} />
>>>>>>> Stashed changes
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
