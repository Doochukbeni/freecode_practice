import React from 'react'


function Header() {

    
   
    const handleDirect = () => {
        
    }

  return (
    <div>
          <img src='../DSC_7503.jpg'  width='50%' alt='' className='hero-image' />
          <div className='profile'>
            <h1>Benjamin Chukwuma</h1>
              <h4>Fullstack Developer</h4>
              <h5>Benjamin websites</h5>
          </div>
          <div>
            <button className='btn'  type='submit' onClick={handleDirect}> Email</button>
              <button className='btn' type='submit' onClick={handleDirect }> Linkdln</button>
          </div>
         
          
    </div>
  )
}

export default Header