import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainComponent from "./Component/MainComponent"
import Home from "./Component/Home"
import About from "./Component/About"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Old from "./Component/Old"

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path='/old' element={
              <Old/>
         }>
        </Route>
      </Routes>
    </BrowserRouter>
    </MainComponent>
    </QueryClientProvider>
  )
}

export default App
