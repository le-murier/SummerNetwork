import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AppPath } from "../../../common/enums/enums";
import "./login.css";
import "../sign.css";
import icon from "../../../assets/images/icon.png";
import person from "../../../assets/images/person.png";
import visibility from "../../../assets/images/visibility.png";

export default function Login () {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handleClick(e){
    navigate(AppPath.ROOT);
  }

  return(
    <div className="login">
      <div className="loginWrapper">
        <img className={"icon"} src={icon} alt="icon"/>
        <form className="loginBox" onSubmit={handleClick}>
          <label><h1>Sign in</h1></label>
          <div className={"input_line"}>
            <input
              placeholder="Email"
              type="email"
              requiredf
              className="loginInput"
              ref={email}
            />
            <img className="input_image" src={person} alt="person"/>
          </div>
          <div className={"input_line"}>
            <input
              placeholder="Password"
              type={passwordVisibility ? "text" : "password"}
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <img className="input_image" src={visibility} alt="visibility" onClick={() => setPasswordVisibility(!passwordVisibility)}/>
            </div>

          <span className="loginForgot"><Link to="/">Forgot Password?</Link></span>
          <label> <input type="checkbox" /> Keep me signed in </label>
          <button className="loginButton" type="submit" >
            LOGIN
          </button>
          <label>Not a member? <Link to={AppPath.SIGN_UP}>Sign up</Link></label>
        </form>
      </div>
    </div>
  )
}