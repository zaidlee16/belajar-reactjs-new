import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BelajarReact from "./components/BelajarReact";
import HelloWorld from "./components/HelloWorld";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Selamat Datang di Pembelajaran ReactJs Kelas 12</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+ Tambah</button>
        <p>Jumlah : {count}</p>
        <button onClick={() => setCount((count) => count - 1)}>- Kurang</button>
        <p>
          ReactJs merupakan sebuah library JavaScript untuk membuat sebuah
          aplikasi single page application
          {/* <code>src/App.jsx</code> and save to test HMR */}
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BelajarReact title={"Selamat Datang, Zaid!"} body={"This is a Body"} />
      <HelloWorld hello={"Hello World"} />
      <Welcome title={"Welcome"} description={"Wdesc"} button={"Wel!!"} />
      <Card title={"Card"} description={"Cdesc"} button={"Car!!"} />
      <Footer title={"Footer"} description={"Fdesc"} button={"Foo!!"} />
    </>
  );
}

// const Tambahan = () => {
//   return (
//     <>
//       <button>Simpan Data</button>
//     </>
//   );
// };

export default App;
