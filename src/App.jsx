// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/component/Homepage";
import { About } from "./components/component/About";
import { Header } from "./components/component/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
