import Link from 'next/link'
import React from 'react'

function Error() {
  return (
    <div>
      <div>
        <img style={{ height: 420, width: 1000 }} src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png" alt="Bloomsgirl image"></img>
      </div>

      <div>
        <Link href='/'><button  style={{borderRadius:'0px'}}>Back to Home</button></Link>
      </div>

    </div>
  )
}

export default Error