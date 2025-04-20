import React, { useState } from 'react';
import UserSidebars from '../Sidebars/UserSidebars';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

const UserRoot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='relative h-full'>
        <div onClick={()=> setIsOpen(true)} className="bottom-2 left-2 fixed"><Menu/></div>
      <UserSidebars isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoot;
