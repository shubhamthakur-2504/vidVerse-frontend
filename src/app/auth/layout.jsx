import React from 'react'
import AuthCard from '@components/auth/authCard'
export default function signupLayout({ children }) {
    return (
        <div className={`bg-[#020202] text-white flex-col flex   md:p-4  items-center justify-center p-2 min-h-screen`}>
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}