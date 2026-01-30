import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
