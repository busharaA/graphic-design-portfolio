import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

// TODO: 3. Make project cards
// TODO: 4. Make mock case study component