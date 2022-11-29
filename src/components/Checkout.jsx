import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, getDoc, addDoc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Checkout() {

  const location = useLocation();
  const navigate = useNavigate();

  let auth = location.state.isAuthenticated;
  let username = location.state.username;
  let prescriptionList = location.state.prescriptions;
  let permissions = location.state.permissions;

  // return to login if not authenticated
  if (!auth) {
    navigate('/' , {replace: true})
  };

  // getting the costs
  var sum = 0;
  function sumCost(item){
    let x = item.quantity;
    let y = item.costPerUnit;
    sum += x*y;
  }
  prescriptionList.map(sumCost);

  async function handleClick(event) {

    event.preventDefault();

    var streetName = document.getElementById('streetName').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;
    var postalCode = document.getElementById('postalCode').value;

    var total = (sum + 5)*1.13;

    const orders = collection(db, "orders");

    var order = {
      username: username,
      streetName: streetName,
      city: city,
      province: province,
      postalCode: postalCode,
      total: total,
    };

    await addDoc(orders, order);

    navigate('/orderdetails' , {replace: true, state: { isAuthenticated: auth, username : username, permissions:permissions, prescriptions: prescriptionList, order: order}} );
  }

  return (
    <section className="h-100 h-custom gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          {/* Cart */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Cart
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                

              {prescriptionList.map((val, key) => {
                return (

                <tr key={key}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4">
                        <p className="mb-2">Medication: {val.medicationName}</p>
                        <p className="mb-0">Directions: {val.directions}</p>
                        <p className="mb-0">Dosage: {val.dosage}</p>
                      </div>
                    </div>
                  </th>
                  
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      {val.quantity}
                    </p>
                  </td>

                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${val.costPerUnit * val.quantity}
                    </p>
                  </td>
                </tr>
                )
              })}
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                            Delivery Fee
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $5.00
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                            Subtotal
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${sum+5}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                            Tax
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${(sum+5)*0.13}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="flex-column ms-4">
                        <p className="mb-0" style={{ fontWeight: "1000" }}>
                            Total
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "1000" }}>
                      ${((sum+5)*1.13).toFixed(2)}
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
              <p></p>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          {/* Delivery Address */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Delivery Address
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
                              id='streetName'
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Street Address"
                              size="lg"
                              minlength="16"
                              maxlength="16"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              id='city'
                              className="mb-10 mb-xl-5"
                              style={{width: "121%"}}
                              placeholder="City"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 

                            <MDBInput
                              id='province'
                              className="mb-10 mb-xl-5"
                              style={{width: "115%"}}
                              placeholder="Province"
                              size="lg"
                              minLength={2}
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                            <MDBInput
                              id='postalCode'
                              className="mb-10 mb-xl-5"
                              style={{width: "115%"}}
                              placeholder="Postal Code"
                              size="lg"
                              minlength="6"
                              maxlength="7"
                            />
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
          {/* Payment */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Payment
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
                              id='cardName'
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              id='cardNumber'
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="Card Number"
                              size="lg"
                              minlength="16"
                              maxlength="16"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              id='expiry'
                              className="mb-10 mb-xl-5"
                              style={{width: "195%"}}
                              placeholder="Expiry Date                                                           MM/YY"
                              size="lg"
                              minlength="5"
                              maxlength="5"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </p> 
                            <MDBInput
                              id='CVV'
                              className="mb-10 mb-xl-5"
                              style={{width: "180%"}}
                              placeholder="CVV"
                              size="lg"
                              minlength="3"
                              maxlength="3"
                            />
                          </MDBRow>
                          <MDBRow> 
                          <button class="btn btn-primary btn-lg btn-block" type="submit"
                            onClick={handleClick}
                          >Place Order</button>
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