import React from 'react'
import '../Navbar/Navbar.css'
import { BiCameraMovie } from "react-icons/bi";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import UserImg from '../../assets/user.jpg'
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>M<a><FaRegPlayCircle style={{color: '#990202', 
                                                            position: 'relative',
                                                            top: '.4vh'
        }}/></a>VIETROVE</div>
        <div className='pageLinks'>
            <a><BiCameraMovie /></a>
            <a><FaRegPlayCircle style={{color: '#990202'}}/></a>
            <a><IoIosContact /></a>
        </div>
        <div className='userStatus'>
            <img src={UserImg} />
            <GoDotFill style={{color: 'red',
                               position: 'absolute',
                               bottom: '96vh',
                               right: '6.5vw',
                               fontSize: 'clamp(.5rem, .8vw, 2rem)'
            }}/>
            <h4>User</h4>
            <PiPencilSimpleLineThin style={{color: 'grey'}}/>
        </div>
    </div>
  )
}

export default Navbar