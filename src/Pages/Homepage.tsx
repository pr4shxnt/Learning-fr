import React from 'react'
import Greetings from '../Components/UI/Greetings'
import StreakCounter from '../Components/UI/StreakCounter'

 
const Homepage: React.FC =  () => {
  return (
    <div>
        <div className="h-[200vh]">
            <Greetings/>
            <StreakCounter/>
        </div>
    </div>
  )
}

export default Homepage