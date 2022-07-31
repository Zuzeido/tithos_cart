import React  from "react";
import Inicio from "./Inicio";
import Cafeteria from "./Cafeteria"
import Taberna from "./Taberna";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/taberna" element={<Taberna />} />
      </Routes>
    </Router>
    
  )
}
export default App