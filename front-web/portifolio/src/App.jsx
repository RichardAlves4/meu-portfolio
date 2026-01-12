import './App.css'

import { Header } from "./components/header/header";
import { Outlet } from 'react-router-dom'
import { Footer } from "./components/footer/footer";

function App() {

  return (
    <div className="App">
        <Header/>

      <div className="main-content">
      <Outlet />
      </div>

        <Footer />
    </div>
  )
}

export default App;