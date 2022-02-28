import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
