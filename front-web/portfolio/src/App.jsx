import './App.css'

import { Header } from "./components/header/header";

import { Footer } from "./components/footer/footer";
import { Outlet } from 'react-router';

export function App() {

  return (
    <div className="App">
        <Header/>

      <div className="main-content">
      <Outlet/>
      </div>

        <Footer />
    </div>
  )
}