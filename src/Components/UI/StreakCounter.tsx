import React from 'react'


const StreakCounter: React.FC = () => {
  return (
    <div className="flex flex-col  items-center justify-center"> 
    
    <div className="bg-black py-2 text-white p-4 rounded-lg shadow-lg flex flex-col space-y-2 items-center justify-center">
    <h1 className="">Hey, you have 14 days Streak!!</h1>
        <div className="items-center font-bold flex">
            <div className="text-4xl">14</div> <div className="text-6xl">🔥</div>
        </div>
        
        <p className="">Click here, to upload what you learnt today!!</p></div>
    </div>
  )
}

export default StreakCounter