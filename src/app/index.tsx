import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar.tsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </>
  );
}

export default App;
