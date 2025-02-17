import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  function check() {
    // Change the URL to point to the correct port (5000)
    var logindetails = axios.post("http://localhost:5000/login",{"username":user,"password":pass});
    
    logindetails.then(function (data) {
      // Handle the response from the server
      if (data.data === "Login Success") {
       navigate("/sucess")
      } else {
        navigate("/fail")
      }
    }).catch(function(error) {
      console.error("Error logging in:", error);
    });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-blue-300 p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-90">
        <h1 className="text-4xl mb-6 text-center">Log In</h1>
        <input
          onChange={handleUser}
          type="text"
          placeholder="Username"
          name="username"
          className="w-full p-3 border border-gray-300 rounded mb-3"
          value={user}
        />
        <input
          onChange={handlePass}
          type="password" // changed from type="text"
          placeholder="Password"
          name="password"
          className="w-full p-3 border border-gray-300 rounded mb-3"
          value={pass}
        />
        <button onClick={check}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 cursor-pointer rounded transition"
        >
          Log In
        </button>
        
        <p className="text-1xl mb-6 text-center">Don't Have an Account? <a className="text-blue-600 cursor-pointer">Signup</a></p>
      </div>
    </div>
  );
}

export default App;
