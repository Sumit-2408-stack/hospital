// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// export const Headers = () => {
//     const [ showLogin, setShowLogin ] = useState(false);
    
//     return ( 
//     <header> 
// <div className="container">
//     <div className=" navbar-grid">
//         <div className="Logo"> 
//             <NavLink to ="/">
//         <h1> ➕Life Line</h1>
//         </NavLink>
//         </div>
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to = "/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = "/about">About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = "/contact">Contact</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to ="/doctor"> Doctor</NavLink>
//                 </li>
//             </ul>

//             <button className="login-btn" onClick={() => setShowLogin(true)}> Login </button>
//         </nav>
//     </div>
// </div>

// {showLogin && (
//         <div className="login-modal">
//           <div className="login-box">
//             <h2>Login</h2>
//             <form  onSubmit={(e) => { e.preventDefault(); alert("Login submitted!"); }}>
//                 <input type="Name" placeholder="Enter Name" required />
//               <input type="email" placeholder="Enter Email" required />
//               <input type="password" placeholder="Enter Password" required />
//               <button type="submit">Login</button>
//             </form>
//             <button type="button" className="close-btn" onClick={() => setShowLogin(false)}>
//               ✖ Close </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [userName, setUserName] = useState(""); // Save logged in user name

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login (you can replace with API call later)
    setIsLoggedIn(true);
    setUserName(e.target.name.value); // take entered name
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>➕Life Line</h1> </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/doctor">Doctor</NavLink>
              </li>
            </ul>

            {/* Show login/signup or user info depending on state */}
            {!isLoggedIn ? (
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                Login
  </button>
            ) : (
              <div className="user-info">
                <span>Welcome, {userName} 👋</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" name="name" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <input type="password" placeholder="Enter Password" required />
              <button type="submit">Login</button>
            </form>
            <p style={{ marginTop: "10px" }}>
              Don’t have an account? <a href="#">Sign Up</a>
            </p>
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

