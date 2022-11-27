import { NavLink, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { collection, query, where, getDocs, addDoc, doc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function CreateAccount() {

  async function register(event) {

    var name = document.getElementById('registerName').value;
    var user = document.getElementById('registerEmail').value;
    var pass = document.getElementById('registerPassword').value;
    var pass2 = document.getElementById('registerPassword2').value;

    const users = collection(db, "users");
    const q = query(users, where("username", "==", user), where("password", "==", pass));
    const querySnapshot = await getDocs(q);

    if (pass !== pass2){
      alert("Your passwords do not match.");
    } else if(querySnapshot.size == 1) {
      alert("A user with this Email already exists.");
    } else {
      var data = {
        name: name,
        username: user,
        password: pass
      };

      await addDoc(users, data);

      console.log("User has been added successfully");

    }

  };

  return (
    <MDBContainer fluid className='gradient-custom'>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='registerName' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='registerEmail' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='registerPassword' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='registerPassword2' type='password'/>
              </div>



              <MDBBtn className='mb-4' size='lg' onClick={register}>Register</MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://cdn.discordapp.com/attachments/901989329038082058/1040041446004232192/image.png' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default CreateAccount;