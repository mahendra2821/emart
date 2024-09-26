import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Fridge from './Fridge'
import Watch from './Watch'
import Furniture from './Furniture'
import Ac from './Ac'
import Kitchen from './Kitchen'
import Speakers from './Speakers'
import Books from './Books'
import Mens from './Mens'
import Womens from './Womens'
import Tv from './Tv'

import Navbar from './Navbar'
import List__of_orders from './List__of_orders'

import './product.css'

import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByPX5e2NmmfWVLkY1YIvjGYeizDuFvOuE",
  authDomain: "newwebapp-82979.firebaseapp.com",
  projectId: "newwebapp-82979",
  storageBucket: "newwebapp-82979.appspot.com",
  messagingSenderId: "245006906688",
  appId: "1:245006906688:web:44c62b2b20fa76f63736a5",
  measurementId: "G-EBGNG6EZT1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const Products = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((person) => {
      person ? setUser(person) : setUser(null);
    });
  }, []);
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <div>
      <center>
        {user ? (
          <div>
             <Navbar/>
             <List__of_orders/>
            <Watch/>
      <Womens/>
      <Kitchen/> 
    
      <Mobiles />
      <Mens/>
      <Fridge/>
      
      <Computers/>
      <Speakers/> 
      <Ac/>
      <Tv/> 
      <Furniture/>
      <Books/>
         
     

            <button className='signout' onClick={() => auth.signOut()} >Sign Out</button>
          </div>
        ) : (

          
          <button  className='signin' onClick={signInWithGoogle}>Sign In With Google</button>
        )}
      </center>
    </div>
    </div>
  );
};




export default Products
