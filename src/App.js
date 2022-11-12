import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')

  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert();
    }, 1500);
  };
  const [mode, setMode] = useState("light");

  const toggleMode = (cls)=> {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#F8F9FA";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#F8F9FA";
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = "Textutils-home";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtil" aboutText="AboutTextUtils"/> */}
    <Router>
      <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
        <Route exact path="/about" element={<About mode={mode} />} ></Route>
          <Route exact path="/" element={<TextForm heading="Try TextUtils" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
