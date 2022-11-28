import React from "react";
import { useRef, useState } from 'react';
import { collection, query, where, getDocs, addDoc, doc} from "firebase/firestore";
import { db } from './Rtdb.jsx'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCardImage
} from "mdb-react-ui-kit";



function Prescribe() {
  async function prescribe(event){
    event.preventDefault();
    var name = document.getElementById('patientName').value;
    var medication = document.getElementById('medicationName').value;
    var reason = document.getElementById('reason').value;
    var dosage = document.getElementById('dosage').value;
    var quantity = document.getElementById('quantity').value;
    var refills = document.getElementById('refills').value;
    var directions = document.getElementById('directions').value;

    const prescriptions = collection(db, "prescriptions");
    
    var data = {
      patientName: name,
      medicationName: medication,
      reason: reason,
      dosage: dosage,
      quantity: quantity,
      refills: refills,
      directions: directions
    };

    await addDoc(prescriptions, data);
    
    alert("Prescription Created!");
  }
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
                              id = "patientName"
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Name of Patient"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                            <MDBInput
                              id = "medicationName"
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Name of Medication"
                              size="lg"
                            />
                          </MDBRow>
                          <MDBRow>
                          <MDBInput
                              id = "reason"
                              className="mb-10 mb-xl-5"
                              style={{width: "397%"}}
                              placeholder="Reason for Prescription"
                              size="lg"
                              minlength="1"
                            />
                          </MDBRow>
                          <MDBRow>
                          <MDBInput
                              id = "dosage"
                              className="mb-10 mb-xl-5"
                              style={{width: "121%"}}
                              placeholder="Dosage #"
                              size="lg"
                              minLength={1}
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 

                            <MDBInput
                              id = "quantity"
                              className="mb-10 mb-xl-5"
                              style={{width: "115%"}}
                              placeholder="Quantity #"
                              size="lg"
                              minLength={1}
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                            <MDBInput
                              id = "refills"
                              className="mb-10 mb-xl-5"
<<<<<<< Updated upstream
                              style={{width: "115%"}}
                              placeholder="# of Refills "
=======
                              style={{width: "300px"}}
                              placeholder="# of Refills"
>>>>>>> Stashed changes
                              size="lg"
                              minlength="1"
                              maxlength="2"
                            />
                        
                          </MDBRow>
                          <MDBRow>
                          <MDBInput
                              id = "directions"
                              className="mb-10 mb-xl-5"
                              style={{width: "1016px"}}
                              placeholder="Usage Directions"
                              size="lg"
                              minlength="5"
                            />
                          </MDBRow>
                          <MDBRow>  
                          <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={prescribe} >Create</button>
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
      <MDBContainer className="py-5 h-100 ">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h2">
                    Patient Code
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">{' '}</th>
                  <th scope="col">{' '}</th>
                </tr>
              </MDBTableHead>
              <p> {' '}</p>
              <MDBRow md='10' lg='6' className='order-1 order-lg-2 d-flex justify-content-center align-items-center'>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <MDBCardImage src='https://cdn.discordapp.com/attachments/1040108437943627877/1040118727968043060/unknown.png' fluid/>
              </MDBRow>
            </MDBTable>
          </MDBCol>        
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Prescribe;
