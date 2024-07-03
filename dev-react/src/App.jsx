import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <h1>test</h1>
    <Header />
    <Outlet />
    <Footer />
  </>
  )
}

export default App
