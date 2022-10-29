import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#1d3557] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/e48db037-e9fa-48ac-9360-9db499a0d775' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e63946] text-[#f1faee]'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me and email- carlosjimenezb1986@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#e63946] hover:border-[#e63946] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

        </form>

    </div>
  )
}

export default Contact