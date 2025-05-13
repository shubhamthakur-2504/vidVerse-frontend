import React from 'react'
import LoginCard from '@components/auth/loginCard'
import AuthCard from '@components/auth/authCard'
export default function page() {
    return (
        <AuthCard name="login">
            <div className='pt-4'>
                <h1 className='text-xl text-[#AD49E1] italic'>Welcome to VidVerse</h1>
                <p className='text-[#FFFFFF]'>Share, explore, and connect through videos like never before!</p>
                <div className='p-2 m-0.5'>
                    <LoginCard />
                </div>
            </div>
        </AuthCard>
    )
}
