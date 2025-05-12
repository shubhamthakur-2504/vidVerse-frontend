import React from 'react'
import SignupCard from '@components/auth/signupCard'
import AuthCard from '@components/auth/authCard'
export default function signup() {
    return (
        <AuthCard name="signup">
            <div>
                <h1 className='text-xl text-[#AD49E1] italic'>Welcome to VidVerse</h1>
                <p className='text-[#FFFFFF]'>Share, explore, and connect through videos like never before!</p>

                <SignupCard />
            </div>
        </AuthCard>
    )
}

