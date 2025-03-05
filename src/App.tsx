import { Route, Routes } from "react-router-dom";
import { About, Home, Store } from "./pages";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context/shopping-cart-context";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
