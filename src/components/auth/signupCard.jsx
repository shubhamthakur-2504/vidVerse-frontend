"use client"
import React from 'react'
import "@styles/globals.css";
import { useState } from 'react';
import Image from "next/image";
import apiClient from '@lib/axios/api';
import {useRouter} from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupCard() {
    const router = useRouter();
    const [avatarImage, setAvatarImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const handleImageChange = (e) => {
        const type = e.target.name
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = () => {
                const imageData = { file: file, preview: reader.result }
                if (type === "avatar") {
                    setAvatarImage(imageData)
                } else if (type === "cover") {
                    setCoverImage(imageData)
                }
            }
            reader.readAsDataURL(file)
        } else {
            alert('Please select an image file.')
        }
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    if (formElements.password.value !== formElements.confirmPassword.value) {
        setPasswordError("Password does not match");
        return;
    }

    setPasswordError(null);

    const formDataToSend = new FormData();
    formDataToSend.append("userName", formElements.userName.value);
    formDataToSend.append("email", formElements.email.value);
    formDataToSend.append("password", formElements.password.value);
    formDataToSend.append("fullName", formElements.fullName.value);
    formDataToSend.append("avatar", avatarImage?.file); // ensure it's a File
    formDataToSend.append("cover", coverImage?.file);

    apiClient.post("/user/register", formDataToSend, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then((res) => {
        console.log("Registered successfully:", res.data);
        // save in store
        toast.success("Registered successfully",{autoClose:1000,theme:"dark"});
        setTimeout(()=>{
            router.push("/auth/login");
        },1000)
    })
    .catch((err) => {
        toast.error(`Registration failed: ${err.response.data.message}`,{autoClose:3000,theme:"dark"});
    });
};

    return (

        <div className='p-2 m-2 space-x-2'>
            <ToastContainer />
            <form onSubmit={handleSubmit} action="" method="post">
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
                        <label htmlFor="fullName" className=' items-start'>FULL NAME</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c]'>
                        <input type="text" name='fullName' id="fullName" title='fullName' placeholder='fullname' className='w-full placeholder:text-[#7d7d7d] placeholder:text-left text-[#19FF1DFF] ' onFocus={(e) => {
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

                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="confirmpassword" className=' items-start'>CONFIRM PASSWORD</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c]'>
                        <input type="password" name="confirmPassword" id="confirmPassword" title='confirm Password' placeholder='confirm password' className='w-full placeholder:text-[#7d7d7d] placeholder:text-left text-[#19FF1DFF]' onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }} />
                    </div>
                    <div className={`${passwordError ? "text-red-500" : "hidden"}`}>
                        <p>{passwordError}</p>
                    </div>
                </div>

                <div className='flex md:justify-between md:flex-row flex-col'>
                    <div className='flex flex-col pb-5'>
                        <div className='flex justify-start pb-2'>
                            <label htmlFor="avatar" className=' items-start'> {
                                avatarImage ? <Image src={avatarImage.preview} alt='avatar' width={200} height={200} /> : "Select AVATAR"} </label>
                        </div>
                        <div>
                            <div><input type='file' name="avatar" id="avatar" title='avatar' accept='image/*' className='w-full hidden' onChange={handleImageChange} /></div>
                        </div>
                    </div>
                    <div className='flex flex-col pb-5'>
                        <div className='flex justify-start pb-2'>
                            <label htmlFor="cover" className=' items-start'> {
                                coverImage ? <Image src={coverImage.preview} alt='cover' width={280} height={150} /> : "Select COVER"} </label>
                        </div>
                        <div>
                            <div><input type='file' name="cover" id="cover" title='cover' accept='image/*' className='w-full hidden' onChange={handleImageChange} /></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit" className='bg-[#7A1CAC] text-[#EBD3F8] px-4 py-2 rounded-md hover:bg-[#AD49E1] hover:text-[#EBD3F8]'>SIGNUP</button>
                </div>
            </form>
        </div>
    )
}
