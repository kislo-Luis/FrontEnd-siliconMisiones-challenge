import { NavBar } from "./components/NavBar/NavBar";

// //import { Home } from "./pages/home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
