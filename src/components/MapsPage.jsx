import React, { useRef, useEffect, useState } from 'react';
import Map from 'react-map-gl';
import Test from './Test';
import Navigation from './Navigation';
import './index.css' 
import { NavLink } from 'react-router-dom';


export default function MapsPage() {

  return(
    <div className='gradient-custom'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Test> </Test>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Med Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Medication Name" 
        />
        <NavLink className="nav-link" to="/connect">
        <button type="submit">Search</button>
        </NavLink>
    </form>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <br></br>
        <br></br>

        <br></br>
        <br></br>

        YOUR MED DOCSSSS --- THE USER"S MED DOCS
      </div>
    </div>
  );


}



