import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorDetail from "./pages/InstructorDetail"

function App() {
  
  
  return (
    <div className="App bg-stone-400 h-screen flex flex-col items-center gap-8 ">
      <h1>App</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          {/* slash kullanmadan koyduklarımız relative path dir */}
          <Route path="instructors/:id" element={<InstructorDetail />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
          {/* "*" bunların dışında anlamına gelir */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
