import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/about";
import Alert from "./components/Alert";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => setAlert(null), 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181C14";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#EEF5FF";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils";
    }
  };
  return (
    <>
      <div>
        <Navbar
          title="TextUtils "
          mode={mode}
          toggleMode={toggleMode}
          about="about"
        />
        <Alert alert={alert} />
      </div>
      <Routes>
        <Route
          path="/about"
          element={
            <About
              mode={mode}
              toggleMode={toggleMode}
              className="container my-4"
            />
          }
        />
        <Route
          path="/"
          element={
            <div className="container my-4 ">
              <TextForms
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
                toggleMode={toggleMode}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
