import React,{useState} from 'react';

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

import { query, collection, getDocs, where } from "firebase/firestore";
import { auth,db } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function HomePage(){

  const [name,setName] = useState("");
  const [user] = useAuthState(auth);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

   
  if (user) fetchUserName();
  


  return (<div className='homepage'>
  {user&&<h1>Welcome {name}</h1>}
 <Directory />
</div>)
}
 

export default HomePage;
