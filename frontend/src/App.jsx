import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import NotFound from "./pages/NotFound"
import React_projects from "./pages/Programming Languages/React_projects"
import Java from "./pages/Programming Languages/Java"
import JS from "./pages/Programming Languages/JS"
import Python from "./pages/Programming Languages/Python"
import Django from "./pages/Programming Languages/Django"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about/" element={<About />}></Route>
        <Route path="contact/" element={<Contact />}></Route>
        <Route path="projects/" element={<Projects />}></Route>
        <Route path="projects/python" element={<Python />}></Route>
        <Route path="projects/java" element={<Java />}></Route>
        <Route path="projects/js" element={<JS />}></Route>
        <Route path="projects/react" element={<React_projects />}></Route>
        <Route path="projects/django" element={<Django />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
