import "./App.css";
import "./index.css";
import Hero from "./components/hero/Hero";

import Navbar from "./components/navbar/navbar";
import Shop from "./pages/Shop";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Shop />
      <Footer />
    </>
  );
}

export default App;
