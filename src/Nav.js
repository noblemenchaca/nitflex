import React, { useState, useEffect  } from 'react'
import "./Nav.css"



const netFlix = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
const userpic = 'https://pbs.twimg.com/profile_images/1491528617049960452/Jbcw1wJs_400x400.jpg'
//https://youtu.be/XtMThy8QKqU?t=9332

function Nav() {

    const [show, handleShow] = useState(false);
    let classThing = ''
    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              handleShow(true);
          } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }, [])
    if (show) classThing += 'nav_black'
    

    return (
      <div className={`nav ${classThing}`}>
          <img
              className='nav_logo'
              src={netFlix}
              alt='Nitflex Logo'
          />
          <img
              className='nav_icon'
              src={userpic}
              alt="User Profile"
          />
      </div>
    );
}

export default Nav