import React,{useState} from 'react';

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";


import {useSelector} from "react-redux";

function HomePage(){

  const user = useSelector((state)=> state.user.currentuser);

  return (<div className='homepage'>
  <h1>Welcome {user}</h1>
  
 <Directory />
</div>)
}
 

export default HomePage;
