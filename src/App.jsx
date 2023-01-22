import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Employee from "./components/Employee";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import RQEmployee from "./components/RQEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <section className="app-body-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/rq-employee" element={<RQEmployee />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
