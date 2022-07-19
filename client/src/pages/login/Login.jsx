import React, {useRef} from "react";
import {Link} from "react-router-dom"
import "./login.css";

export default function Login () {
    const email = useRef();
    const password = useRef();

    function handleClick(e){

    }


    return(
        <div className="login">
            <div className="loginWrapper">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />

                        <span className="loginForgot"><Link to="/">Forgot Password?</Link></span>
                        <label> <input type="checkbox" /> Keep me signed in </label>
                        <button className="loginButton" type="submit" >
                            "Log In"
                        </button>
                        <label>Not a member? Sign up</label>
                    </form>
            </div>
        </div>
    )
}