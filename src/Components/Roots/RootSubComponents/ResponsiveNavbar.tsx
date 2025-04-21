"use client"

import type React from "react"
import { useState } from "react"
import {  NavLink } from "react-router-dom"
import {
  BadgeDollarSign,
  BookAudio,
  BookCheck,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Lightbulb,
  Projector,
  UserCircle,
} from "lucide-react"
import Greetings from "../../UI/Greetings"
import "../roots.css"

interface ResponsiveNavbarProps {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

interface SideBarItem {
  name: string
  link: string
  icon: React.ReactNode
}

const sideBarData: SideBarItem[] = [
  {
    name: "Profile",
    link: "/user/profile",
    icon: <UserCircle size={30}/>,
  },
  {
    name: "Dashboard",
    link: "/user/dashboard",
    icon: <LayoutDashboard size={30}/>,
  },
  {
    name: "Active",
    link: "/user/active-lessons",
    icon: <BookAudio size={30}/>,
  },
  {
    name: "Completed",
    link: "/user/completed-lessons",
    icon: <BookCheck size={30}/>,
  },
  {
    name: "Projects",
    link: "/user/projects",
    icon: <Lightbulb size={30}/>,
  },
  {
    name: "Portfolio",
    link: "/user/portfolio",
    icon: <Projector size={30}/>,
  },
  {
    name: "Jobs",
    link: "/jobs",
    icon: <BadgeDollarSign size={30}/>,
  },
]

 const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  // Use either controlled or internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen

  return (
    <>
       {
        isOpen? <div className="flex flex-col relative bg-[#8a817c]">
            <div className=" flex items-center py-4  justify-between">
                <div className=" px-3">
                <Greetings/></div>
                <div onClick={()=> setInternalIsOpen(false)} className=" md:hidden -top-6 right-0 h-6 w-8  flex items-center justify-center"><ChevronDown/></div>

            </div>
             <div className=" grid grid-cols-4 md:grid-cols-7 text-[#F4F3EE] items-center justify-center bg-[#483C32] w-full h-full gap-6 py-3 px-4">
        {sideBarData.map((item, index)=>
        <NavLink className={`lol p-1 rounded-2xl`} to={item.link}>
            <div key={index} className="flex justify-center">
                <div className="text-center lol flex flex-col items-center justify-center text-sm">
                    {item.icon}
                    <h1 className="">{item.name}</h1>
                </div>
            </div>
            </NavLink>
        )}
    </div></div> : <div className=""><div className="text-gray-300 md:hidden relative grid grid-cols-4 md:grid-cols-7 bg-black w-full h-full gap-6 py-3 px-4">
    <div onClick={()=> setInternalIsOpen(!controlledIsOpen)} className="absolute md:hidden -top-6 right-0 h-6 w-8 bg-gray-600 flex items-center justify-center"><ChevronUp/></div>
        {sideBarData.slice(0,4).map((item, index)=>
            <NavLink className={`lol p-1 rounded-2xl`} to={item.link}>
            <div key={index} className="flex justify-center">
                <div className="text-center flex flex-col items-center justify-center text-sm">
                    {item.icon}
                    <h1 className="">{item.name}</h1>
                </div>
            </div>
            </NavLink>
        )}
    </div>
    <div className="text-gray-300  md:grid relative hidden grid-cols-4 md:grid-cols-7 bg-black w-full h-full gap-6 py-3 px-4">
    <div onClick={()=> setInternalIsOpen(!controlledIsOpen)} className="absolute md:hidden -top-6 right-0 h-6 w-8 bg-gray-600 flex items-center justify-center"><ChevronUp/></div>
        {sideBarData.map((item, index)=>
            <NavLink className={`lol p-1 rounded-2xl`} to={item.link}>
            <div key={index} className="flex justify-center">
                <div className="text-center flex flex-col items-center justify-center text-sm">
                    {item.icon}
                    <h1 className="">{item.name}</h1>
                </div>
            </div>
            </NavLink>
        )}
    </div>
    </div>
       }
    </>
  )
}

export default ResponsiveNavbar