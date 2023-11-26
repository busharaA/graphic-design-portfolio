import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;

// TODO: 2. Design the app and add content to Home and About
// TODO: 3. Make project cards and link to socials
// TODO: 4. Make mock case study component