import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainScreen from "./screen/MainScreen";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true,       // animation only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <MainScreen />
      <Footer />
    </>
  );
}

export default App;
