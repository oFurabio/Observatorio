import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[75vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
