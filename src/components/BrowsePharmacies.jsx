import React, { useRef, useEffect, useState } from 'react';
import Map from 'react-map-gl';
import Test from './Test';
import Navigation from './Navigation';
import './index.css' 
import { NavLink } from 'react-router-dom';
import { MDBCol, MDBRow, MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';


export default function BrowsePharmacies() {
 
  return(
    <div className='gradient-custom'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Test> </Test>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search to populate list of Pharmacies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Type here"
            name="s" 

                
        />
      <MDBRow>  
        <NavLink className="nav-link" to="/browsePharmacies">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Search</button>
        </NavLink>
      </MDBRow>   
    </form>
    
      </div>

      <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem tag='label'>
        <NavLink className="nav-link" to="/checkout">
        <MDBCheckbox label='Cras justo odio' />
        </NavLink>
      </MDBListGroupItem>

      <MDBListGroupItem tag='label'>
        <MDBCheckbox label='Dapibus ac facilisis in' />
      </MDBListGroupItem>

      <MDBListGroupItem tag='label'>
        <MDBCheckbox label='Morbi leo risus' />
      </MDBListGroupItem>

      <MDBListGroupItem tag='label'>
        <MDBCheckbox label='Porta ac consectetur ac' />
      </MDBListGroupItem>

      <MDBListGroupItem tag='label'>
        <MDBCheckbox label='Vestibulum at eros' />
      </MDBListGroupItem>
    </MDBListGroup>
       
      

      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Here is your list of pharamcies with $$$ </p> 
    </div>
);


}



