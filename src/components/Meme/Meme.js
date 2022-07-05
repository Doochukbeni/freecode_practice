import React from 'react'

function Meme() {

    const handleClick = () => {
        console.log(' i was clicked')
    };
    const handleonMouseover = () => {
        console.log('mouse over')
    }
  return (
      <>
          <div className='container'>
              <img src='../jose-pedro-ortiz-0O2oxmMc5aY-unsplash.jpg' className='hero-image'
              onMouseOver={handleonMouseover}/>
              <button type='submit' onClick={ handleClick }>click Me</button>
          </div>
      </>
  )
}

export default Meme