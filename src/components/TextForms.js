import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Upper Case", "success");
  };

  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLoClick = () => {
    console.log("Lowecase was clicked" + text);
    let newText = text.toLowerCase();
    props.showAlert("Text converted to Lower Case", "success");
    setText(newText);
  };

  const handleclClick = () => {
    console.log("Cleared text" + text);
    let newText = "";
    props.showAlert("Text cleared", "success");
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied successfully", "success");
  };

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const countWords = (str) => {
    const wrd = str.trim().split(/\s+/);
    return wrd.length;
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mx-4">
          <h2>{props.heading}</h2>
          <div>
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "#575757" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
              className="form-control mb-3"
              value={text}
              onChange={handleOnchange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className=" mx-1 my-1 btn btn-primary"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="mx-1 my-1 btn btn-primary"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="mx-1 my-1 btn btn-primary"
            onClick={handleclClick}
          >
            Clear
          </button>

          <button
            disabled={text.length === 0}
            className=" mx-1 my-1 btn btn-primary"
            onClick={handleCopy}
          >
            Copy
          </button>

          <button
            disabled={text.length === 0}
            className=" mx-1 my-1 btn btn-primary"
            onClick={handleExtraspaces}
          >
            Remove Extra Spaces
          </button>
        </div>

        <div
          className="container mx-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2 className="mb-3">Your text summary :</h2>
          {
            <p>
              {text.length === 0 ? "0" : countWords(text)} - word {text.length}{" "}
              - characters
            </p>
          }
          {
            <p>
              Average {text.length === 0 ? "0" : countWords(text) * 0.008}{" "}
              minutes required to read.
            </p>
          }
          <h2>Preview</h2>
          <p>{text.length < 1 ? "Enter something to preview" : text}</p>
        </div>
      </div>
    </>
  );
}
