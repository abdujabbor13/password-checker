import { useState, useRef, useCallback } from "react";
import {Alert, Stack, Button} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./App.css";

function App() {
  const passwordRef = useRef();
  const againPasswordRef = useRef()
  const [inpType, setInpType] = useState("password");
  const [againInpType, setAgainType] = useState('password')
  const [error, setError] = useState(false)
  const [errorMassage, setErrorMassage] = useState('')
  // const numItem = useRef()
  // const lengthItem = useRef()
  // const lowercase = useRef()
  // const upprecase = useRef()
  // const symbol = useRef()
  // asswordRef.current.setAttribute("type", passwordRef.current.value);

  const togglePassword = useCallback(() => {
    setInpType((prevType) => (prevType === "password" ? "text" : "password"));
  }, []);

  const togglePassword2 = useCallback(() => {
    setAgainType((prevType) => (prevType === "password" ? "text" : "password"));
  }, []);

  // const checkPassword = () => {
  //   const value = passwordRef.current.value || "";



  //   // if (!numItem.current) numItem.current.classList.toggle("red", hasNum);
  //   // if (!lengthItem.current) lengthItem.current.classList.toggle("red", isLength);
  //   // if (!lowercase.current) lowercase.current.classList.toggle("red", isLower);
  //   // if (!upprecase.current) upprecase.current.classList.toggle("red", isUpp);
  //   // if (!symbol.current) symbol.current.classList.toggle("red", isSymbol);
  // };

  const againCheckPassword = () => {
    if (!againPasswordRef.current || !passwordRef.current) return;

    const againValue = againPasswordRef.current.value;

    if (passwordRef.current.value !== againValue) {
      againPasswordRef.current.classList.add("red");
    } else {
      againPasswordRef.current.classList.remove("red");
    }
  };

  const enterPassword = () => {
    if(!passwordRef.current) return

    const value = passwordRef.current?.value || "";
    const hasNum = /\d/.test(value);
    const isLength = value.length >= 8;
    const isLower = /[a-z]/.test(value);
    const isUpp = /[A-Z]/.test(value);
    const isSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    if(hasNum && isLength && isLower && isUpp && isSymbol){
      setError(false)
      setErrorMassage('')
    } else {
      setError(true)
      setErrorMassage('Parol kuchsiz! Kamida 8 ta belgidan iborat bo‘lishi va raqam, katta-kichik harflar, hamda maxsus belgilar bo‘lishi kerak.')
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
            type={inpType}
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            placeholder="password"
            ref={passwordRef}
            // onChange={checkPassword}
          />
          <button onClick={togglePassword} className="input-group-text">
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

        <div className="input-group mb-3">
          <input
            type={againInpType}
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            placeholder="password"
            ref={againPasswordRef}
            onChange={againCheckPassword}
          />
          <button onClick={togglePassword2} className="input-group-text">
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
        <h5>enter your password</h5>
        <Stack sx={{ width: '100%' }} spacing={2} >
          <Button onClick={enterPassword} className="btn btn-danger">send</Button>
          {error && <Alert severity="error">{errorMassage}</Alert>}
        </Stack>
        {/* <ul style={{padding:'5px', margin:'0'}}>
          <li ref={numItem} style={{padding:'5px'}}>At least 1 number (0...9)</li>
          <li ref={lengthItem} style={{padding:'5px'}}>At least 8 characters length</li>
          <li ref={lowercase} style={{padding:'5px'}}>At least 1 lowercase letter (a...z)</li>
          <li ref={upprecase} style={{padding:'5px'}}>At least 1 upprecase later (A...z)</li>
          <li ref={symbol} style={{padding:'5px'}}>At least 1 special symbol (!...?)</li>
        </ul> */}
      </div>
    </div>
  );
}

export default App;
