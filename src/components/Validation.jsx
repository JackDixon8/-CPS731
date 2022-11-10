import React from "react";
import { NavLink } from "react-router-dom";
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
  return(
    <section>
      <MDBContainer className="py-5 h-100">
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
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Pharmacy"
                              size="lg"
                              minlength="1"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Employee ID"
                              size="lg"
                              minlength="1"
                              maxlength="9"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Employee Password"
                              size="lg"
                              minlength="4"
                            />
                          </MDBRow>
                          <MDBRow>
                          <NavLink className="nav-link" to="/prescribe" style={{width: "1120px"}}>  
                          <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
                          </NavLink>
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
                            className="mb-10 mb-xl-5"
                            style={{width: "195%"}}
                            placeholder="Insurance Company"
                            size="lg"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "180%"}}
                            placeholder="Health Card #"
                            size="lg"
                            minlength={12}
                            maxlength={12}
                          />                          
                        </MDBRow>
                        <MDBRow>
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "195%"}}
                            placeholder="Insurance ID"
                            size="lg"
                            minlength="1"
                            maxlength="9"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "180%"}}
                            placeholder="Insurance Password"
                            size="lg"
                            minlength="4"
                          />
                        </MDBRow>
                        <MDBRow>  
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Connect</button>
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