import React from 'react'

 
const Greetings: React.FC =  () => {
    const getGreeting = () => {

        const hour = new Date().getHours(); 
        if (hour < 12) return "Good Morning!";
        if (hour < 18) return "Good Afternoon!";
        else return "Good Evening!";
    }
  return (
    <div className='flex gap-2'>
        <img className='h-12 w-12 rounded-full' src={`https://imgs.search.brave.com/lY3C0XgfpHmXpcZicYFN66wddlXmuuPgR2Ni81tqOlA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDQ3Lzcz/My82ODIvbm9uXzJ4/L2dyZXktYXZhdGFy/LWljb24tdXNlci1h/dmF0YXItcGhvdG8t/aWNvbi1zb2NpYWwt/bWVkaWEtdXNlci1p/Y29uLXZlY3Rvci5q/cGc`} alt="" />
        <div className="">
            <h1 className="text-xl font-bold">Hi, Prashant</h1>
            <p className="text-sm"> {getGreeting()+ "❤️"} </p>
        </div>
    </div>
  )
}

export default Greetings