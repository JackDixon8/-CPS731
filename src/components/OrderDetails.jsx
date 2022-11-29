import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate  } from "react-router-dom";

export default function Basic() {

  const location = useLocation();
  const navigate = useNavigate();

  let auth = location.state.isAuthenticated;
  let permissions = location.state.permissions;
  let username = location.state.username;
  let prescriptionList = location.state.prescriptions;
  let order = location.state.order;
  let tax = order.total - (order.total / 1.13) ;

  async function handleClick() {
    navigate('/mapPage' , {replace: true, state: { isAuthenticated: auth, username : username, permissions:permissions, order: order}});
  }

  return (
        <MDBContainer className="gradient-custom vh-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>

                    <MDBContainer className="text-start text-black p-4">
                      <MDBTypography
                        tag="h5"
                        className="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                        {username}
                      </MDBTypography>
                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a" }}
                      >
                        Thanks for your order
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                    
                      {prescriptionList.map((val, key) => {
                        return (
                          <div key={key}>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bold mb-0"> {val.medicationName} Qty.{val.quantity}</p>
                              <p className="text-muted mb-0">${val.costPerUnit * val.quantity}</p>
                            </div>
                          </div>
                        )
                      })}
                      

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">Shipping</p>
                        <p className="small mb-0">$5.00</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Tax</p>
                        <p className="small">{tax.toFixed(2)}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                        {order.total.toFixed(2)}
                        </p>
                      </div>
                      
                    </MDBContainer>

                    <MDBContainer className="d-flex justify-content-center border-top-0 py-4">

                      <MDBBtn
                      onClick={handleClick}
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        Track your order
                      </MDBBtn>
                    </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
  );
}