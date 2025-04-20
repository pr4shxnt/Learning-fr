"use client"

import type React from "react"
import { useState } from "react"
import {  NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  BadgeDollarSign,
  BookAudio,
  BookCheck,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Projector,
  UserCircle,
  X,
} from "lucide-react"
import Greetings from "../UI/Greetings"

interface UserSidebarProps {
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
    icon: <UserCircle/>,
  },
  {
    name: "Dashboard",
    link: "/user/dashboard",
    icon: <LayoutDashboard/>,
  },
  {
    name: "Active Lessons",
    link: "/user/active-lessons",
    icon: <BookAudio/>,
  },
  {
    name: "Completed Lessons",
    link: "/user/completed-lessons",
    icon: <BookCheck/>,
  },
  {
    name: "Your Projects",
    link: "/user/projects",
    icon: <Lightbulb/>,
  },
  {
    name: "Your Portfolio",
    link: "/user/portfolio",
    icon: <Projector/>,
  },
  {
    name: "Find Jobs",
    link: "/jobs",
    icon: <BadgeDollarSign/>,
  },
]

 const UserSidebar: React.FC<UserSidebarProps> = ({
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true)

  // Use either controlled or internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen

  return (
    <motion.div
      initial={{ width: isOpen ? 256 : 64 }}
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 z-50 h-screen bg-black text-white"
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <AnimatePresence>
            <div className="flex  items-end"><div className="text-3xl">🎯</div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="text-lg uppercase  tracking-wider font-bold"
              >
               Learner.fr
              </motion.div>
            )}
            </div>
          </AnimatePresence>
        
        </div>

        {/* Navigation */}
        <div className="mt-4 flex-1 overflow-y-auto px-2">
          {sideBarData.map((item, index) => {

            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) => `
                  flex items-center gap-3 rounded-md px-3 py-2.5 mb-1
                   ease-in-out
                  ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                  ${!isOpen && "justify-center"}
                `}
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
                  {item.icon}
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center p-4">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2 }}
              >
                <Greetings />
              </motion.div>
            )}
            
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X  /> : <Menu  />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default UserSidebar