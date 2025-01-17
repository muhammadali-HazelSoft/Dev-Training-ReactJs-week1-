import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogedin } from "../../State/UserSlice";
import { useDispatch } from "react-redux";
import LoginToast from "../../toast/Toast";
import "./Login.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toastShow, setToastShow] = useState(false);
  const loginFormHandler = () => {
    if (
      emailRef.current.value === "admin@email.com" &&
      passwordRef.current.value === "Admin@1234"
    ) {
      dispatch(isLogedin());
      navigate("/dashboard");
    }
    else{
      setToastShow(true)
    }
  };
  return (
    <>
    <LoginToast toastShow={toastShow} setShow={setToastShow}/>
      <div className="LoginForm my-auto">
        <div className="row">
          <div>
            <div className="container  ">
              <h2 className="pt-3 pt-md-4 pt-lg-5 fw-bolder text-center pb-3">
                Login Please
              </h2>
              <form
                action="#"
                onSubmit={(e) => {
                  e.target.preventDefalut();
                  localStorage.setItem(e.target.value);
                }}
              >
                <div className="row ">
                  {/* email input */}
                  <div className="col-3"></div>
                  <div className="col-12 col-md-6 my-1" id="emailInput">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="your_email@email.com"
                      ref={emailRef}
                      pattern="admin@email.com"
                      required
                    />
                    <span className="text-danger mt-1">
                      Email not registered..!
                    </span>
                    <span className="text-success mt-1">Verified..✓</span>
                  </div>
                  <div className="col-3"></div>
                  {/* password input */}
                  <div className="col-3"></div>
                  <div className="col-12 col-md-6 my-1" id="passwordInput">
                    <label htmlFor="password" className="form-label fw-bold">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      ref={passwordRef}
                      pattern="Admin@1234"
                      required
                    />
                    <span className="text-danger mt-1">Incorrect password</span>
                    <span className="text-success mt-1">Verified..✓</span>
                  </div>
                  <div className="col-3"></div>
                  {/* Submit button */}
                  <div className="col-4 col-md-2 mt-5 mx-md-auto ">
                    <input
                      type="submit"
                      value="Login"
                      className="form-control btn-primary"
                      onClick={loginFormHandler}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
