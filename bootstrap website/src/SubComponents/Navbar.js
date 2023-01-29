import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
       <nav className='navbar navbar-expand-lg bg-secondary'>
          <div className='container-fluid'>
             <Link to="/" className='navbar-brand text-white fw-bold'>FITNESS</Link>
             <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navToggle">
                <span className='navbar-toggler-icon'></span>
             </button>
             <div className='collapse navbar-collapse' id='navToggle'>
               <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                     <Link to="/" className='nav-link active text-white fw-semibold fs-5'>Home</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/feature" className='nav-link active text-white fw-semibold fs-5'>Feature</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/about" className='nav-link active text-white fw-semibold fs-5'>About</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/gallery" className='nav-link active text-white fw-semibold fs-5'>Gallery</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/contact" className='nav-link active text-white fw-semibold fs-5'>Contact</Link>
                  </li>
               </ul>
             </div>
          </div>
       </nav>
    )
}

export default Navbar;

