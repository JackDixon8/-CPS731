import { NavLink, Navigate } from "react-router-dom";
import React, {useState } from "react";
import { collection, query, where, getDocs, getDoc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'


function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  async function handleClick() {
    setIsLoading(true);
    const users = collection(db, "users");
    const q = query(users, where("username", "==", "admin"), where("password", "==", "admin"));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot.size);

    // information is correct
    if (querySnapshot.size == 1){

      setIsLoading(false);
      setIsAuthenticated(true);

    } else {

      console.log(querySnapshot.size);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data()['username'], " => ",  doc.data()['password'],);
      });
  
      alert("Your login information is incorrect")

    }

    
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

                    <button class="btn btn-primary btn-lg btn-block" onClick={handleClick}>Login</button>
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
