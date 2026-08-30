import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
