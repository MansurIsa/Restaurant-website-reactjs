import React from 'react'
import '../Home/Home.css';


const Home = () => {
  return (
    <div id='home' className='home'>
        <div className="container home_heading">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <h2><span>BURGER</span> FOR <br /> WEEK</h2>
            <p className="details">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="home_btn">
                <a href="#" className='btn'>Order</a>
            </div>
        </div>
    </div>
  )
}

export default Home