import React, { useRef, useEffect, useState } from 'react';
import Map from 'react-map-gl';
import Test from './Test';
import Navigation from './Navigation';
import './index.css' 


export default function BrowsePharmacies() {
 


  return(
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Test> </Test>

   
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
        <button type="submit">Search</button>
    </form>
    
      </div>
      <br></br>
      
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
       
      

      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Here is your list of pharamcies with $$$ </p> 
    </div>
);


}



