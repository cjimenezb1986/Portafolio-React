import React from 'react'
import SpringBoot from '../assets/javaSpringBoot.png'
import SpringData from '../assets/SpringData.png'
import SpringSecurity from '../assets/SpringSecurity.png'
import Git from '../assets/Git.png'
import IntelliJ_IDEA from '../assets/IntelliJ_IDEA.png'
import Oracle from '../assets/Oracle.png'
import sqlserver from '../assets/sql-server.png'
import MySql from '../assets/MySql.png'
import postgresql from '../assets/postgresql.png'
import reactLogo from '../assets/React_logo.png'
import tailwindcss from '../assets/tailwindcss.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f1faee] text-[#1d3557]'>
        {/**Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#e63946]'>Skills</p>
                <p className='py-4'>// These  are the tecnologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
            <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={SpringBoot} alt='SpringBoot icon'/>
                    <p className='my-4'>Spring Boot</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={SpringData} alt='SpringBoot icon'/>
                    <p className='my-4'>Spring Data</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={SpringSecurity} alt='SpringBoot icon'/>
                    <p className='my-4'>Spring Security</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt='SpringBoot icon'/>
                    <p className='my-4'>Git</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={IntelliJ_IDEA} alt='SpringBoot icon'/>
                    <p className='my-4'>IntelliJ IDEA</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={Oracle} alt='SpringBoot icon'/>
                    <p className='my-4'>Oracle DB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={sqlserver} alt='SpringBoot icon'/>
                    <p className='my-4'>Sql Server DBt</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySql} alt='SpringBoot icon'/>
                    <p className='my-4'>MySql DB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={postgresql} alt='SpringBoot icon'/>
                    <p className='my-4'>Postgresql DB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactLogo} alt='SpringBoot icon'/>
                    <p className='my-4'>React </p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwindcss} alt='SpringBoot icon'/>
                    <p className='my-4'>Tailwind css </p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills