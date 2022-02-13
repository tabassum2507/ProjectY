import React from 'react';
import "./login.css";

const Login = () => {
  return (
    <div className="login">
       <span className="logo">Logo</span>
       <form>
         <h3>Login</h3>
         <label for="username">Username</label>
         <input type="text" placeholder="Email or Phone" id="username"></input>

         <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
       </form>
    </div>
  );
}

export default Login;