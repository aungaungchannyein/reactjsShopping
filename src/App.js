import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "./firebase/firebase";


// import { auth } from "./firebase/firebase.utils"



function App() {
  const [user] = useAuthState(auth);
  console.log(user)

  // const [name, setName] = useState(null);
  // const navigate = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  // useEffect(() => {
  //   if (loading) return;
  //   console.log(user)
  // }, [user, loading]);

  
    return (
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="shop/*" element={<ShopPage />} />
         <Route path="signin/*" element={<SignInAndSignUpPage/>} />
        </Routes>
      </BrowserRouter>
        
    );
  
}

export default App;
