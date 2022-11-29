import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React, {useState} from "react";
import { collection, query, where, getDocs, getDoc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'


function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(event) {

    event.preventDefault();

    var user = document.getElementById('typeEmailX-2').value;
    var pass = document.getElementById('typePasswordX-2').value;


    const users = collection(db, "users");
    const q = query(users, where("username", "==", user), where("password", "==", pass));
    const querySnapshot = await getDocs(q);

    // information is correct
    if (querySnapshot.size == 1){

      var permissions;

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        permissions = doc.data().permissions;
      });

      setIsAuthenticated(true);

      if (permissions == 'doc') {
        navigate('/prescribe' , {replace: true, state: { isAuthenticated: true, username : user, permissions:permissions}} );
      } else {
        navigate('/mapPage' , {replace: true, state: { isAuthenticated: true, username : user, permissions:permissions}} );
      }

      

    // information is incorrect
    } else {
      alert("Your login information is incorrect");
    };
  }

  return (
        <div class="vh-100 gradient-custom container-fluid vh-80 py-1">
          <div class="row d-flex justify-content-center align-items-center vh-80">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>
                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Password</label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block" onClick={login}>Login</button>
                  <div>
                    <ul className="navbar-nav ml-auto">
                    </ul>
                  </div>
                  <hr class="my-4"></hr>
                  <p>or Register with</p>
                  <NavLink className="nav-link" to="/CreateAccount">
                  <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
                    type="submit"><i class="fab fa-google me-2"></i> Register</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div> 
  );
}


export default Login;
