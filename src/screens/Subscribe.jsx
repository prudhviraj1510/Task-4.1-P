import axios from 'axios';
import React, { useState } from 'react'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'

function Subscribe() {
  const [email, setEmail] = useState();
  const handleSubscribe = () => {
    const body = {"email": email} 
    console.log('bidy: ' + email)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/sendgrid',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : body
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      if(response.status === 200){
        alert(response.data)
      }
    })
    .catch((error) => {
      alert('Email not sent! Try again!')
      console.log(error);
    });
  }
  return (
    <div>
      <Navbar/>
      <div className='susbscribe'>
          <p>SIGN UP FOR OUR DAILY INSIDER</p>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      <Footer/>
    </div>
  )
}

export default Subscribe