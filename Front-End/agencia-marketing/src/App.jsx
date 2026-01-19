import { BrowserRouter, Routes, Route } from "react-router-dom";

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
       {/*  <Route path="/courses" element={<Courses />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
