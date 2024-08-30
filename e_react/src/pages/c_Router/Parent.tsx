import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Parent() {
  const location = useLocation();
  const { userId } = location.state || {};

  return (
    <div>
      <Link to='example01'>Example 01</Link>
      <br />
      <Link to='example02'>Example 02</Link>
      <p>User ID: {userId}</p>
    </div>
  )
}
