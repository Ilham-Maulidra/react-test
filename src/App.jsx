// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/page/Homepage";
import { About } from "./components/page/About";
import { Layout } from "./components/uikit/Layout";
import { Hijab } from "./components/produk/hijab";
import { Blouse } from "./components/produk/blouse";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="produk/hijab" element={<Hijab />} />
          <Route path="produk/blouse" element={<Blouse />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
