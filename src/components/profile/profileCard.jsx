import React from 'react'
import "@styles/globals.css";
import UserProfileData from "@components/profile/userProfileData";
import TabControllers from './tabs/tabControllers';
export default function ProfileCard() {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <UserProfileData />
        <hr className='border-[1px] border-[#AD49E1] md:w-[70%] mt-5 w-full'/>
        <TabControllers />
      </div>
    </div>
  )
}
