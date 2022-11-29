import React, { useRef, useEffect, useState } from 'react';
import Test from './Test';
import './index.css' 
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { collection, query, where, getDocs, getDoc} from "firebase/firestore"; 
import { db } from './Rtdb.jsx'


export default function MapsPage() {

  const [prescriptionList, setPrescriptionList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  let auth = location.state.isAuthenticated;
  let username = location.state.username;
  let permissions = location.state.permissions;
  let order = location.state.order;

  if (!auth) {
    navigate('/' , {replace: true})
  };

  const prescriptions = collection(db, "prescriptions");
  const q = query(prescriptions, where("patientName", "==", username));

  const orders = collection(db, "orders");
  const r = query(orders, where("username", "==", username));

  useEffect(() => {
    async function listPrescriptions() {
      const list = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setPrescriptionList(list);
    };
    listPrescriptions();
  }, [])

  useEffect(() => {
    async function trackOrder(){

    };
  }, [order])

  async function handleClick() {

    navigate('/checkout' , {replace: true, state: { isAuthenticated: auth, username : username, prescriptions: prescriptionList, permissions:permissions}} );
    
  }

  return(
    
    <div className='gradient-custom'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Test/>
      </div>

      <div style={{height:'250px', width:'100px'}}>

      </div>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <button type="submit" onClick={handleClick}>Order Medication</button>
      </div>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

        <ul>YOUR MED DOCSSSS --- THE USER"S MED DOCS
          {prescriptionList.map((val, key) => {
            return (
              <li key={key}>
                Medication: {val.medicationName}
                <ul>
                  <li>{val.reason}</li>
                  <li>Directions: {val.directions}</li>
                  <li>Dosage: {val.dosage}</li>
                  <li>Quantity: {val.quantity}</li>
                  <li>Refills: {val.refills}</li>
                  <li>${val.costPerUnit}</li>
                </ul>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  );
}



