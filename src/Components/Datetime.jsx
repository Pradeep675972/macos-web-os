import React, { useState, useEffect } from 'react'

const Datetime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const dayName = now.toLocaleDateString('en-US', { weekday: 'short' })
      const month = now.toLocaleDateString('en-US', { month: 'short' })
      const day = now.getDate()
      
      let hours = now.getHours()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12 || 12
      
      const minutes = String(now.getMinutes()).padStart(2, '0')
      
      setDateTime(`${dayName} ${day} ${month} ${hours}:${minutes} ${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return <div>{dateTime}</div>
}

export default Datetime
