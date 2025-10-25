'use client'
import React, { useState, useEffect } from 'react'
import { gernalFetch, gernalPost, gernalDelete } from '@lib/utils/functions'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { usePathname } from 'next/navigation'
export default function SubscribeButton({channelId}) {
    const currentPath = usePathname()
    const router = useRouter()
    const loggedStatus = useSelector((state) => state.userData.isLoggedIn)
    const [isSubscribed, setIsSubscribed] = useState(false)
    
    useEffect(() => {
        // Only check if the user is logged in
        if (loggedStatus) {
            const checkSubscriptionStatus = async () => {
                try {
                    const status = await gernalFetch(`subscription/issubscribed/${channelId}`, true);                    
                    
                    setIsSubscribed(status.isSubscribed); // 2. Update the component's state
                } catch (error) {
                    console.error("Failed to check subscription status:", error);
                }
            };
            checkSubscriptionStatus();
        }
    }, [loggedStatus, channelId]);
    const toggleSubscription = async () => {
        if (!loggedStatus) {
            toast.error("Login to subscribe, redirecting...", { autoClose: 1000, theme: "dark", position: "top-center" });
            router.replace(`/auth/login?redirect=${encodeURIComponent(currentPath)}`)
            return
        }
        try {
            if (isSubscribed) {
                setIsSubscribed(false)
                await gernalDelete(`subscription/unsubscribe/${channelId}`, true)
                toast.success("Unsubscribed", { autoClose: 500, theme: "dark", position: "top-center" });
            } else {
                setIsSubscribed(true)
                await gernalPost(`subscription/subscribe/${channelId}`, true)
                toast.success("Subscribed", { autoClose: 500, theme: "dark", position: "top-center" });
            }
        } catch (error) {
             setIsSubscribed(prev => !prev);
            console.log(error);
        }
    }
    return (
        <>
        <button
            onClick={toggleSubscription}
            className={isSubscribed ? "bg-black text-white font-bold hover:bg-[#535353] p-2 m-2 rounded-lg" : "bg-red-600 text-white font-bold hover:bg-[#ff1d1d] p-2 m-2 rounded-lg"}>
            {isSubscribed ? "subscribed" : "subscribe"}
        </button>
        </>
    )
}
