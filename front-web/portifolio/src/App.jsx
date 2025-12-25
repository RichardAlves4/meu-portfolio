import './App.css'

import { Header } from "./components/header/header";
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet />
    </div>
  )
}

export default App;