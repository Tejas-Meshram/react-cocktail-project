import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="error">
        <div className="error-container">
            <h1>oops!... dead end</h1>
            <Link to='/' className='btn'>Back Home</Link>
        </div>
    </section>
  )
}

export default Error