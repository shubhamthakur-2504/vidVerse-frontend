"use client"
import React from 'react'
import "@styles/globals.css";
import apiClient from '@lib/axios/api';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '@lib/features/userDataSlice';
export default function LoginCard() {
    const router = useRouter()
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        const formdata = e.target.elements
        const formDataToSend = new FormData()
        formDataToSend.append("userName", formdata.userName.value)
        formDataToSend.append("email", formdata.email.value)
        formDataToSend.append("password", formdata.password.value)
        apiClient.post("/user/login", formDataToSend,{
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                dispatch(login(res.data.data.user))
                toast.success("Login successfully",{autoClose:1000,theme:"dark",position:"top-center"});
                setTimeout(()=>{
                    router.push("/")
                },1000)
            })
            .catch((err) => {
                toast.error(`login failed: ${err?.response?.data.message || "something went wrong"}`,{autoClose:3000,theme:"dark",position:"top-center"});
                console.log(err.response);
                
                console.log(err);
                
            })
    }
    return (

        <div className='p-2 m-2 space-x-2'>
            <ToastContainer/>
            <form onSubmit={handlesubmit} action="" method="post">
                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="userName" className=' items-start'>USERNAME</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c] items-center'>
                        <input type="text" name="userName" id="userName" title='userName' placeholder='username' className='w-full placeholder:text-[#6d6d6d] placeholder:text-left text-[#19FF1DFF]  ' onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }}
                        />
                    </div>
                </div>

                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="email" className=' items-start'>EMAIL</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c]'>
                        <input type="email" name="email" id="email" title='email' placeholder='email' className='w-full placeholder:text-[#7d7d7d] placeholder:text-left text-[#19FF1DFF]' onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }} />
                    </div>
                </div>

                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="password" className=' items-start'>PASSWORD</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c]'>
                        <input type="password" name="password" id="password" title='password' placeholder='password' className='w-full placeholder:text-[#7d7d7d] placeholder:text-left text-[#19FF1DFF]' onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }} />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button type="submit" className='bg-[#7A1CAC] text-[#EBD3F8] px-4 py-2 rounded-md hover:bg-[#AD49E1] hover:text-[#EBD3F8]'>SIGNUP</button>
                </div>
            </form>
        </div>
    )
}
