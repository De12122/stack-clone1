import Avatar from '../../components/Avatar/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import stackoverflow from '../../assets/stackoverflow.png'
import search from '../../assets/search.png'
//import button from '../../components/button/button '
//import './Navbar.css '

const Navbar = () => {
    var User = 121

    return (
        <nav>
            <div className='navbar'>
                <Link to='./' className='nav-item nav-logo'>
                    <img src={stackoverflow} alt='logo' width={90} />
                </Link>
                <Link to='./' className='nav-item nav-btn'>About</Link>
                <Link to='./' className='nav-item nav-btn'>Products</Link>
                <Link to='./' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='search' />
                    <img src={search} alt='sear' width={30} className='search-icon' />

                </form>
                { User === null ? 
                <Link to='/Auth' className='
               nav-item nav-links '>Log In</Link >:
               <>
          <Avatar backgroundColor='#009dff' px="10px" 
                py="7py" borderRadius={"50%"} color="white"><link to='/' 
                style={{color:"white", textDecoration:'none'}} ></link>M</Avatar>
                <button className='nav-item nav-links'>Log Out</button>
                </>
               
                
               }
            </div>
        </nav>
    )
}

export default Navbar
