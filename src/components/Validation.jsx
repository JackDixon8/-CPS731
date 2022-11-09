import React from "react";
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
                              style={{width: "500px"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "464px"}}
                              placeholder="Pharmacy"
                              size="lg"
                              minlength="16"
                              maxlength="16"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "500px"}}
                              placeholder="Employee ID"
                              size="lg"
                              minlength="5"
                              maxlength="5"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "464px"}}
                              placeholder="Employee Password"
                              size="lg"
                              minlength="3"
                              maxlength="3"
                            />
                          </MDBRow>
                          <MDBRow>  
                          <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
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
                  Connect Accounts
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
                            style={{width: "500px"}}
                            placeholder="Name"
                            size="lg"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "464px"}}
                            placeholder="Pharmacy"
                            size="lg"
                            minlength="16"
                            maxlength="16"
                          />
                        </MDBRow>
                        <MDBRow>
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "500px"}}
                            placeholder="Employee ID"
                            size="lg"
                            minlength="5"
                            maxlength="5"
                          />
                          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                          <MDBInput
                            className="mb-10 mb-xl-5"
                            style={{width: "464px"}}
                            placeholder="Employee Password"
                            size="lg"
                            minlength="3"
                            maxlength="3"
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