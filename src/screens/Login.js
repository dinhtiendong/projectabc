import React from 'react'
import '../App.css'
import icons from '../icons/icon'

const {AiFillEyeInvisible,AiFillEye} = icons

const Login = () => {
  return (
    <div className='flex w-full h-full pt-20 pl-20 pr-20'>
        <div className="left flex-1">

        </div>
        <div className='flex flex-1 justify-center items-center'>
            <div className='flex flex-col w-4/5 border border-[#e5e7eb] p-10'>
                <div className='font-bold text-3xl text-center'>Login</div>
                <div className='mt-4'>
                    <span>Email</span>
                    <input type='text' placeholder="Type Here" className='h-10 w-full border border-black rounded-md pl-2'/>
                </div>
                <div className='mt-4'>
                    <span>Password</span>
                    <div className='mt-2 relative'>
                    <input type='password' placeholder="Must be at least 8 characters" className='h-10 w-full border border-black rounded-md pl-2 relative'/>
                        <AiFillEyeInvisible className='absolute right-3 top-1/2 eyes cursor-pointer'/>
                    </div>

                </div>
                <input type='button' value='LOGIN' className='h-14 w-full border bg-black rounded-md pl-2 font-medium cursor-pointer text-white mt-4'/>
                <input type='button' value='LOGIN AS GUEST' className='h-14 w-full border bg-black rounded-md pl-2 font-medium cursor-pointer text-white mt-4'/>

                <div className='flex flex-col items-center mt-2'>
                    <div>
                        <span>Not a Member?</span>
                        <span className='cursor-pointer text-blue-500 ml-2'>Sign Up</span>
                    </div>
                    <div className='text-center px-8 pt-2'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login