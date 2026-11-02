import "./App.css";

function App() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Section */}
        <div className="login-left">
          <div className="brand">
            <span className="brand-icon">✦</span>
            <span>NovaSpace</span>
          </div>

          <div className="welcome-content">
            <h1>Welcome Back!</h1>
            <p>
              Manage your work, connect with your team
              and achieve more every day.
            </p>
          </div>

          <div className="login-decoration">
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="circle circle-three"></div>
          </div>

          <p className="left-footer">
            © 2026 NovaSpace. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="login-right">

          <div className="login-form">

            <h2>Sign In</h2>
            <p className="form-description">
              Enter your details to access your account.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert("Login button clicked!");
            }}>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#forgot">Forgot Password?</a>
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>

            </form>

            <div className="signup-text">
              Don't have an account?
              <a href="#signup"> Sign Up</a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;