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

// TODO: 5. Make the app website responsive