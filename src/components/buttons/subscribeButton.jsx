'use client'
import React from 'react'
import { gernalFetch } from '@lib/utils/functions'
import { useSelector } from 'react-redux'
export default function SubscribeButton(channelId) {
    
    const loggedStatus = useSelector((state) => state.userData.userData.isLoggedIn)
    let isSubscribed = false
    if(loggedStatus){
        isSubscribed = gernalFetch(`subscription/issubscribed/${channelId}`, true)
    }
    const toggleSubscription =  () => {
        if (!loggedStatus) {
            window.location.href = "/auth/login"
            return
        }
        if (isSubscribed) {
            gernalFetch(`subscription/unsubscribe/${channelId}`, true)
        } else {
            gernalFetch(`subscription/subscribe/${channelId}`, true)
        }
    }
    return (
        <button
            onClick={toggleSubscription}
            className={isSubscribed ? "bg-black text-white font-bold hover:bg-[#535353] p-2 m-2 rounded-lg" : "bg-red-600 text-white font-bold hover:bg-[#ff1d1d] p-2 m-2 rounded-lg"}>
            {isSubscribed ? "subscribed" : "subscribe"}
        </button>
    )
}
