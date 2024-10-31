import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Welcome } from './components/welcome/Welcome'
import { About } from './components/about/About'

function App() {
  const nasrin =createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={nasrin}/>
    </>
  )
}

export default App
