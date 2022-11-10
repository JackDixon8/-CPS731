import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBCardImage,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function UserLinkCreateAccount() {
  return(
    <section className="gradient-custom">
      <MDBContainer className="py-5 h-100 gradient-custom">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h2">
                    Scan Provider Code
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">{' '}</th>
                  <th scope="col">{' '}</th>
                </tr>
              </MDBTableHead>
              <p> {' '}</p>
              <MDBTableBody>
                <MDBCard
                  className="shadow-2-strong mb-5 mb-lg-0 d-flex"
                >
                  <MDBCardBody className="p2-4">
                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          <MDBRow> 
                          <button class="btn btn-primary btn-lg btn-block" type="submit">Click to Scan</button>
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
                style={{ width: "100%", borderRadius: "40px" }}
              >
                <MDBCardBody className="p2-4">  
                  <MDBCol>
                    <MDBRow>
                      <MDBCol>
                        <MDBRow>
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "100%"}}
                            placeholder="Insurance Company"
                            size="lg"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "100%"}}
                            placeholder="Health Card #"
                            size="lg"
                            minlength={12}
                            maxlength={12}
                          />                          
                        </MDBRow>
                        <MDBRow>
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "100%"}}
                            placeholder="Insurance ID"
                            size="lg"
                            minlength="1"
                            maxlength="9"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "100%"}}
                            placeholder="Insurance Password"
                            size="lg"
                            minlength="4"
                          />
                        </MDBRow>
                        <MDBRow
                        className="mb-10 mb-xl-5">  
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
    <MDBContainer className="py-5 h-100 gradient-custom">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h2">
                    Submit Information
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
                  style={{ width: "100%", borderRadius: "40px" }}
                >
                  <MDBCardBody className="p2-4">
                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          <MDBRow>
                          <NavLink className="nav-link" to="/mapPage" style={{width: "100%"}}>  
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
  </section>
  );
} 