import { useEffect } from "react";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Page/Home';
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
