import React, {useState} from 'react';
import './App.css';
import {useSpring,animated} from 'react-spring';

function App() {
  const [registrationFormStatus, setRegistrationFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -430 : 0,
    opacity: registrationFormStatus ? 0 : 1
})
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 430,
        opacity: registrationFormStatus ? 1 : 0
    })
    const loginBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent': 'solid 2px #105FF'})
    const registerBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 2px #105FF': 'solid 0px transparent'})

  function registerClicked() {setRegistrationFormStatus(true)}
  function loginClicked() { setRegistrationFormStatus(false)}

  return (
      <div className="container">
        <div className="login-register-wrapper">
          <div className="nav-buttons">
            <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>Login</animated.button>
            <animated.button onClick={registerClicked} id="registerBtn"style={registerBtnProps}>Register</animated.button>
          </div>
          <div className="form-group">
            <animated.form action='' id='loginform' style={loginProps}><LoginForm /></animated.form>
              <animated.form action='' id='registerform'style={registerProps}><RegisterForm /></animated.form>
          </div>
            <animated.div className="forgot-panel" style={loginProps} ><a href='a' >Forget password ?</a></animated.div>
          </div>
      </div>
  );
}
function LoginForm() {
  return (
     <React.Fragment>
        <input type="text" id="username" placeholder="Username"/>
        <input type="password" id="password" placeholder="Password"/>
        <input type="submit" value='login' className="submit"/>
     </React.Fragment>

  )

}
function RegisterForm() {
  return (
     <React.Fragment>
        <input type="text" id="fullname" placeholder="Full name"/>
        <input type="email" id="email" placeholder="Email"/>
        <input type="password" id="password" placeholder="Password" />
        <input type="password" id="confirm password" placeholder="Confirm password" />
        <input type="submit" value='register' className="submit"/>
     </React.Fragment>
  )
}

export default App;
