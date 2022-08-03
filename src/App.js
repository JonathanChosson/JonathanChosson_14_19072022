import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import EmployeeList from "./Pages/EmployeeList"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<EmployeeList />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
