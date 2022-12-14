import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-[#eeeeee] flex justify-center text-[#525f7f] items-center p-4'>
            <form action="https://getform.io/f/cc963a12-977f-4372-a2ad-b0ea5ec40cf1" method='POST' className='flex flex-col max-w-[600px] w-full'>

                <div className='pb-8'>
                    <div className='flex justify-center'>
                        <p className='text-4xl font-bold inline border-b-4  border-[#fea34f] '>Contact</p>
                    </div>
                    <p className='py-4 text-center'>Submit the form below or shoot me an email - rodrigo.pittar@gmail.com</p>
                </div>
                <input className='bg-[#3F3F3F] text-slate-50 p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4  p-2 bg-[#3F3F3F] text-slate-50' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#3F3F3F] text-slate-50 p-2' name="message" rows="10"></textarea>
                <button className='border-2 border-[#f9a02c] hover:bg-[#f9a02c] hover:border-[#f9a02c] hover:text-white duration-100 px-4 py-3 my-8 mx-auto flex items-center' >Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact