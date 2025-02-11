import { useState, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const passwordRef = useRef();
  const numItem = useRef()
  const lengthItem = useRef()
  const lowercase = useRef()
  const upprecase = useRef()
  const symbol = useRef()

  // asswordRef.current.setAttribute("type", passwordRef.current.value);

  const getValue = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.type =
        passwordRef.current.type === "password" ? "text" : "password";
    }
  }, []);

  const sendValue = () => {
    const value = passwordRef.current.value || '';
    const hasNum = /\d/.test(value)
    const isLength = value.length > 8;
    const isLower = /[a-z]/.test(value);
    const isUpp = /[A-Z]/.test(value);
    const isSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if(numItem.current && hasNum) {
      numItem.current.classList.add('show')
    }
    if (lengthItem.current && isLength) {
      lengthItem.current.classList.add('show')
    }
    if (lowercase.current && isLower) {
      lowercase.current.classList.add('show')
    }
    if (upprecase.current && isUpp) {
      upprecase.current.classList.add('show')
    }
    if(symbol.current && isSymbol){
      symbol.current.classList.add('show')
    }
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        style={{
          width: "20rem",
          backgroundColor: "orange",
          padding: "10px 20px 30px 20px ",
        }}
        className="card"
      >
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            placeholder="password"
            ref={passwordRef}
          />
          <button onClick={getValue} className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
          </button>
        </div>
        <h5>password must contains</h5>
        <ul style={{padding:'5px'}}>
          <li ref={numItem} style={{padding:'5px'}}>At least 1 number (0...9)</li>
          <li ref={lengthItem} style={{padding:'5px'}}>At least 8 characters length</li>
          <li ref={lowercase} style={{padding:'5px'}}>At least 1 lowercase letter (a...z)</li>
          <li ref={upprecase} style={{padding:'5px'}}>At least 1 upprecase later (A...z)</li>
          <li ref={symbol} style={{padding:'5px'}}>At least 1 special symbol (!...?)</li>
        </ul>
        <button onClick={sendValue} className="btn btn-info">send</button>
      </div>
    </div>
  );
}

export default App;
