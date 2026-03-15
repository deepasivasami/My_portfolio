// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <>
//       <header className="header">
//         <h1>Deepa S</h1>
//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//         <nav className={menuOpen ? "nav active" : "nav"}>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/skill">Skills</Link>
//           <Link to="/project">Projects</Link>
//           <Link to="/resume">Resume</Link>
//           <Link to="/contact">Contact</Link>

//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header



import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <h1>Deepa S</h1>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skill">Skills</Link>
          <Link to="/project">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </header>
    </>
  )
}

export default Header