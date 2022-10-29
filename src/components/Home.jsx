import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#457b9d]'>

        {/**Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#e63946] '>Hi, My Name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#f1faee]'>Carlos Arturo Jimenez Bustamante</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#1d3557]'> I'm Backend Developer.</h2>
            <p className='text-[#1d3557] py-4 max-w-[700px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias totam quae consequuntur dolore, expedita facilis natus nesciunt? Exercitationem veritatis, 
                amet provident omnis neque, odio libero iusto possimus sapiente consectetur similique!
             </p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1d3557] hover:border-[#1d3557]'>
                    <Link to='work' smooth={true} duration={500}> View Work </Link> 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home