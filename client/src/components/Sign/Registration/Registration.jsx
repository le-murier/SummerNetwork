import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AppPath } from "../../../common/enums/enums";
import "../sign.css";
import icon from "../../../assets/images/icon.png";
import person from "../../../assets/images/person.png";
import visibility from "../../../assets/images/visibility.png";

export default function Registration () {
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

          <div className={"input_line"}>
            <input
              placeholder="Repeat Password"
              type={passwordVisibility ? "text" : "password"}
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <img className="input_image" src={visibility} alt="visibility" onClick={() => setPasswordVisibility(!passwordVisibility)}/>
          </div>

          <button className="loginButton" type="submit" >
            NEXT
          </button>

        </form>
      </div>
    </div>)
}
