import { Outlet } from "react-router-dom";
import LinkProvider from "./Providers/LinkProvider";

import NavBar from "./Components/NavBar";

import './App.css';

function App() {
  return (
    <>
    <LinkProvider>
      <NavBar />
      <Outlet />
    </LinkProvider>
    </>
  );
}

export default App;