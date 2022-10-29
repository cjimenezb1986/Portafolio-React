import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#1d3557] bg-[#e63946]' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 text-[#1d3557] border-[#1d3557]'>Work</p>
                        <p className='py-6'>// Check out some of my recent work</p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                            <div style={{backgroundImage: `url(${workImg})` }} className='shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center mx-auto content-div'>
                                {/* Hover Effects */}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <span className='text-2xl font-bold text-white tracking-wider'>
                                        Java Spring Boot Aplication
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Demo
                                            </button>
                                        </a>
                                        <a>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Code
                                            </button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                    </div>       

            </div>
    </div>
  )
}

export default Work