import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainComponent from "./Component/MainComponent"
import Home from "./Component/Home"
import About from "./Component/About"

function App() {
  
  return (
    <MainComponent>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
              <Home/>
         }>
        </Route>
        <Route path='/home' element={
              <Home/>
         }>
        </Route>
        <Route path='/about' element={
              <About/>
         }>
        </Route>
      </Routes>
    </BrowserRouter>
    </MainComponent>
  )
}

export default App
