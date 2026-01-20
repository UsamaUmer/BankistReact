import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Operation from "./components/Operation";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
      <Navbar />
      <Hero />
    </header>
    <Feature></Feature>
    <Operation></Operation>
      <main>
        <Routes>
          {/* <Route path="/feature" element={<Feature />}></Route> */}
          {/* <Route path="/" element={<Hero />}></Route> */}
          <Route path="/operation" element={<Operation />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
