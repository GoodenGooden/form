import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./components/Details"
import Tickets from "./components/Tickets"
import User from "./components/User"




function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="Details" element={<Details />} />
      <Route path="Tickets" element={<Tickets />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
