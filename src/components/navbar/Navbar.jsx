import React from 'react'
import './navbar.css'

const Menu = () =>{
    return (
        <div className="gym__navbar-menu_container tracking-in-expand">
            <p><a className="tracking-in-expand" href="#home"> Home</a></p>
            <p><a className="tracking-in-expand" href="#blog">What is GymLyb ?</a></p>
            <p><a className="tracking-in-expand" href="#contact">Contact Us</a></p>
            <p><a className="tracking-in-expand" href="#footer">Footer</a></p>
        </div>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false)

    const controlMenu =() =>{
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="gym__navbar-container app__bg">
            <div className="gym__navbar-logo" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dumbbell" onClick={controlMenu} >
                    <path
                          d="M17.48,6.55v0h0L14.64,3.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2.12,2.12-8.1,8.1L5.12,13.22a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.81,2.81v0h0l2.81,2.81a1,1,0,0,0,.71.3,1,1,0,0,0,.71-1.71L8.66,16.76l8.1-8.1,2.12,2.12a1,1,0,1,0,1.41-1.42ZM3.71,17.46a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Zm18-12.34L18.88,2.29a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,5.12Z"></path>
                </svg>
            </div>
            {toggleMenu && (
                <div className="gym__navbar-links_container">
                <Menu/>
            </div>
            )}
        </div>
    )
}
export default Navbar
