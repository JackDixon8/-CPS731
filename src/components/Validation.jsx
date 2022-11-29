import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, addDoc, doc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Validation() {
  const navigate = useNavigate();
  async function verify(event){
    event.preventDefault();
    var name = document.getElementById('name').value;
    var pharmacy = document.getElementById('pharmacyName').value;
    var ID = document.getElementById('employeeID').value;
    var pass = document.getElementById('password').value;

    const providers = collection (db, "providers");

    var data = {
      name: name,
      pharmacyName: pharmacy,
      employeeID: ID,
      password: pass
    };
    await addDoc(providers, data);
    navigate("/prescribe", {replace:true, state: {isAuthenticated: true}});
  }

  async function connect(event){
    event.preventDefault();
    var insurance = document.getElementById('insuranceCompany').value;
    var healthCard = document.getElementById('healthCard').value;
    var ID = document.getElementById('insuranceID').value;
    var pass = document.getElementById('insurancePass').value;

    const insurances = collection (db, "insurances");

    var data = {
      insuranceCompany: insurance,
      healthCard: healthCard,
      insuranceID: ID,
      insurancePass: pass
    };
    await addDoc(insurances, data);
    alert("Insurance Connected!");
    navigate("/prescribe", {replace:true, state: {isAuthenticated: true}});
  }
  return(
    <section className="gradient-custom">
      <MDBContainer className="py-5 h-100 ">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h2">
                    Account Verification
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">{' '}</th>
                  <th scope="col">{' '}</th>
                </tr>
              </MDBTableHead>
              <p> {' '}</p>
              <MDBTableBody>
                <MDBCard
                  className="shadow-2-strong mb-5 mb-lg-0"
                  style={{ width: "1062px", borderRadius: "40px" }}
                >
                  <MDBCardBody className="p2-4">
                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          <MDBRow>
                            <MDBInput
                              id = "name"
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              id = "pharmacyName"
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Pharmacy"
                              size="lg"
                              minlength="1"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              id ="employeeID"
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Employee ID"
                              size="lg"
                              minlength="1"
                              maxlength="9"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              id = "password"
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Employee Password"
                              size="lg"
                              minlength="4"
                            />
                          </MDBRow>
                          <MDBRow>
                          <button class="btn btn-primary btn-lg btn-block" onClick={verify} type="submit">Submit</button>
                          </MDBRow>    
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>        
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBTable responsive>
            <MDBTableHead>
              <tr>
                <th scope="col" className="h2">
                  Connect Insurance
                </th>
                {/* <th scope="col">Format</th> */}
                <th scope="col">{' '}</th>
                <th scope="col">{' '}</th>
              </tr>
            </MDBTableHead>
            <p> {' '}</p>
            <MDBTableBody>
              <MDBCard
                className="shadow-2-strong mb-5 mb-lg-0"
                style={{ width: "1062px", borderRadius: "40px" }}
              >
                <MDBCardBody className="p2-4">
                  <MDBCol>
                    <MDBRow>
                      <MDBCol>
                        <MDBRow>
                          <MDBInput
                            id = "insuranceCompany"
                            className="mb-10 mb-xl-5"
                            style={{width: "195%"}}
                            placeholder="Insurance Company"
                            size="lg"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                          <MDBInput
                            id = "healthCard"
                            className="mb-10 mb-xl-5"
                            style={{width: "180%"}}
                            placeholder="Health Card #"
                            size="lg"
                            maxlength={12}
                          />                          
                        </MDBRow>
                        <MDBRow>
                          <MDBInput
                            id = "insuranceID"
                            className="mb-10 mb-xl-5"
                            style={{width: "195%"}}
                            placeholder="Insurance ID"
                            size="lg"
                            minlength="1"
                            maxlength="9"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                          <MDBInput
                            id = "insurancePass"
                            className="mb-10 mb-xl-5"
                            style={{width: "180%"}}
                            placeholder="Insurance Password"
                            size="lg"
                            minlength="4"
                          />
                        </MDBRow>
                        <MDBRow>  
                        <button class="btn btn-primary btn-lg btn-block" onClick={connect} type="submit">Connect</button>
                        </MDBRow>    
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>        
      </MDBRow>
    </MDBContainer>
  </section>
  );
}