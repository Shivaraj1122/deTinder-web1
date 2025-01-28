import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
function App() {

  return (
    <>
     <BrowserRouter basename="/">
      <Routes>
      <Route path="/" element={<div>Base Page</div>}/>
        <Route path="/login" element={<div>Login Page</div>}/>
        <Route path="/test" element={<div>Login Page</div>}/>
      </Routes>
     </BrowserRouter>
      <NavBar />
    </>
  )
}

export default App
