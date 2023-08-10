import {Link} from 'react-router-dom'

import Image from '../image/1st.png'
import React from 'react'

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
         <div  className="main__header-left">
          <h4>Hello I am</h4>
          <h1>SHUVAM</h1>
          <h2>SHRESTHA</h2>
        <p className='text__container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium, vitae porro rerum numquam pariatur quo perspiciatis, sequi illo ducimus fugiat doloribus? Ea corrupti non nemo velit veritatis accusamus ab?</p>
       <Link to='/contact'className='btn'> Let's Talk</Link>
         
       </div>
         <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className="main__header-image">
          <img src={Image} alt="main__header-image" />
         </div>
         </div>
         </div>
    

    </header>
  )
}

export default Header