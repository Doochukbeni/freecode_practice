import React from 'react'

function Jokes(props) {
  return (
      <div className='joke'>
          <p>setup: {props.setup}</p>
          <p>punchline: {props.punchline}</p>
          <hr />
          
    </div>
  )
}

export default Jokes


