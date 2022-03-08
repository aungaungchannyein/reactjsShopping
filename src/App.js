import React,{useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import PasswordResetPage from './pages/password-reset-page/password-reset-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth,db } from "./firebase/firebase";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";



// import { auth } from "./firebase/firebase.utils"



function App() {
  
  const [user,loading] = useAuthState(auth);
  console.log("hello"+user);
  const dispatch = useDispatch();

  // const [name, setName] = useState(null);
  // const navigate = useNavigate();
  const fetchUserName = async () => {
    try { 
      if(user !== null){
        const q = await query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        console.log(data.name)
        dispatch(setCurrentUser(data.name));
    }
     
     
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if(loading) return;
    console.log("run fetch")
    fetchUserName();
  });
   
  
    return (
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="shop/*" element={<ShopPage />} />
         <Route path="signin/*" element={<SignInAndSignUpPage/>} />
         <Route path="resetpassword/*" element={<PasswordResetPage/>} />

        </Routes>
      </BrowserRouter>
        
    );
  
}

export default App;
