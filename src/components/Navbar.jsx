import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill, BsWhatsapp} from 'react-icons/bs'

import Logo from '../assets/logo1.png'

import { Link } from 'react-scroll'

const Navbar = () =>{
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d3557] text-[#f1faee]'>
             <div>
                <img src={Logo} alt="Logo Image" style={{width: '150px'}}/>
            </div>   

            {/*Menu */}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex '>
                    <li className='hover:scale-125'><Link to='home' smooth={true} duration={500}>Home</Link> </li>
                    <li className='hover:scale-125'><Link to='about' smooth={true} duration={500}> About</Link></li>
                    <li className='hover:scale-125'><Link to='skills' smooth={true} duration={500}> Skills</Link></li>
                    <li className='hover:scale-125'><Link to='work' smooth={true} duration={500}> Work</Link></li>
                    <li className='hover:scale-125'><Link to='contact' smooth={true} duration={500}> Contact</Link></li>
                </ul>
            </div>

            {/* Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1d3557] flex flex-col justify-center items-center'}>
                <li className='hover:scale-125 py-6 text-4xl'><Link  onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='hover:scale-125 py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}> About</Link></li>
                <li className='hover:scale-125 py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}> Skills</Link></li>
                <li className='hover:scale-125 py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}> Work</Link></li>
                <li className='hover:scale-125 py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}> Contact</Link></li>
            </ul>

            {/*Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            LinkeIn <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            WhatsApp <BsWhatsapp size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar