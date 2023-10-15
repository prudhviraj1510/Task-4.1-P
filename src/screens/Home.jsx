import React from 'react'
import Card from '../Components/Card'
import List from '../mock/List'
import book from '../assets/Book1.jpeg'
import Navbar from '../Components/Navbar.jsx'
import '../Components/Card.css'
import Footer from '../Components/footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <img className='image' src={require('../assets/banner.png')} />
      </div>
      <div>
        <p className='feature'>Featured Acticles</p>
        <div className='row'>
          {List.map(item => (
            <Card
              image={book}
              name={item.name}
              description={item.description}
              star={item.star}
              name1={item.name1}
            />
          ))}
        </div>
        <button className='pl'>See all articles</button>
      </div>
      <div>
        <p className='feature'>Featured Tutorials</p>
        <div className='row'>
          {List.map(item => (
            <Card
              image={book}
              name={item.name}
              description={item.description}
              star={item.star}
              name1={item.name1}
            />
          ))}
        </div>
        <button className='pl'>See all tutortials</button>
      </div>
      <div className='susbscribe'>
        <p>SIGN UP FOR OUR DAILY INSIDER</p>
        <input placeholder='Enter your email'/>
        <button>Subscribe</button>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home