import { X } from 'lucide-react';
import React from 'react';
import Greetings from '../UI/Greetings';

interface UserSidebarsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserSidebars: React.FC<UserSidebarsProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="">
      

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 px-3 py-3 bg-black text-white z-50">
          <div className="flex justify-between items-center">
            <Greetings/>
            <div onClick={() => setIsOpen(false)} className="cursor-pointer">
              <X />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSidebars;
