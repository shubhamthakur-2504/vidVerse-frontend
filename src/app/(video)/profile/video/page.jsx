import React from 'react'
import ProfilePage from './profilePage'
import ProfileCard from '@components/profile/profileCard';
import "@styles/globals.css";
export default function page() {
  return (
    <div className='block'>
      <ProfilePage>
        <ProfileCard />
      </ProfilePage>
    </div>
  )
}
