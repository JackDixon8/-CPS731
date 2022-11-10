import React from "react";
import { useRef, useState } from 'react';
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



function Prescribe() {
const [message, setMessage] = useState('');

const inputRef = useRef(null);

const [updated, setUpdated] = useState('');

const handleClick = () => {
  // 👇 "inputRef.current.value" is input value
  setUpdated(inputRef.current.value);
};
  return (
    <section>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h2">
                    Create Prescription
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
                          <MDBRow className>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "500px"}}
                              placeholder="Name of Patient"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "464px"}}
                              placeholder="Name of Medication"
                              size="lg"
                            />
                          </MDBRow>
                          <MDBRow>
                         
                          <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "1016px"}}
                              placeholder="Reason for Prescription"
                              size="lg"
                              minlength="1"
                            />
                          </MDBRow>
                          
                          <MDBRow>
                          <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "313px"}}
                              placeholder="Dosage #"
                              size="lg"
                              minLength={1}
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 

                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "300px"}}
                              placeholder="Quantity #"
                              size="lg"
                              minLength={1}
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "300px"}}
                              placeholder="# of Refills "
                              size="lg"
                              minlength="1"
                              maxlength="2"
                            />
                        
                          </MDBRow>
                          <MDBRow>
                          <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "1016px"}}
                              placeholder="Usage Directions"
                              size="lg"
                              minlength="5"
                              maxlength="5"
                            />
                          </MDBRow>
                          <MDBRow>  
                          <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handleClick} >Create</button>
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

export default Prescribe;
