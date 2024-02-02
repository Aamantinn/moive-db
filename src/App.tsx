

import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Moviepage from "./components/Moviepage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  

  return (
    <>
      

      <Header/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Moviepage />} />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
