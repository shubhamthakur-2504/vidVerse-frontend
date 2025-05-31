"use client"

import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

export default function AllComment({ children }) {
  const refreshKey = useSelector((state) => state.refresh.commentRefreshKey)
  const [key, setKey] = useState(0)

  useEffect(() => {
    // This will force re-fetching ShowComment (server component)
    setKey(prev => prev + 1)
  }, [refreshKey])

  return <div key={key}>{children}</div>
}