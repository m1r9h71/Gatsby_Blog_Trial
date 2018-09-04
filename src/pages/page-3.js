import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
    <div>
        <h1>Hi from the third page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link><br></br>
        <Link to="/page-2">Go back to the page 2</Link>
    </div>
)

export default ThirdPage