import { Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false:true);
        return () => (window.onscroll = null);
    };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />
                <span>Home</span>
                <div className="menu">
                <span>Movies</span>
                    <div className="options">
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                    </div>
                </div>
                <div className="menu">
                <span>Series</span>
                    <div className="options">
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                    </div>
                </div>
                <div className="menu">
                <span>Popular</span>
                    <div className="options">
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                    </div>
                </div>
                <div className="menu">
                <span>My List</span>
                    <div className="options">
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                        <option value="comedy">Comedy</option>
                    </div>
                </div>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <div className='profile'>
                <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2" alt="" />
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar