import "./App.css";
import Products from "./component/Product";
import Home from "./component/Home";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Chat from "./component/Chat";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Chat />
      <Products />
      <Footer />
    </>
  );
}

export default App;
