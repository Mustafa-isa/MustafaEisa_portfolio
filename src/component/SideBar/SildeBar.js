import React from 'react'
import "./SideBar.scss"
import { Link, NavLink } from 'react-router-dom'
import Letter from '../../assets/images/my_letter-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'
function SildeBar() {
  return (
    <div className='sideBar'> 
    
    <Link className='logo' to='/'>
<img src={Letter} alt="logo" className="letter" />
<h2 className="my_name">Mustafa</h2>
    </Link>
    <nav>
<NavLink to="/"  exact  activeClassName="selected" 

className="home">

<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
</NavLink>  


<NavLink to="/user"  exact  activeClassName="selected" 

className="user">

<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
</NavLink> 


<NavLink to="/contact"  exact  activeClassName="selected" 

className="contact">

<FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
</NavLink>




    </nav>

    <ul>
    <li>
        <a target='blank' href="https://www.linkedin.com/in/mustafa-eisa-81585323a/">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target='blank' href="https://github.com/Mustafa-isa">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </li> 
    
      <li>
        <a target='blank' href="https://github.com/Mustafa-isa">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target='blank' href="https://github.com/Mustafa-isa">
          <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
        </a>
      </li>
    </ul>
    </div>
  )
}

export default SildeBar