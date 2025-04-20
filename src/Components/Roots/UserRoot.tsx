import React, { useState } from 'react';
import UserSidebars from '../Sidebars/UserSidebars';
import { Outlet } from 'react-router-dom';

const UserRoot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='relative h-full'>
      
      <UserSidebars isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" p-4 pl-18">
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoot;
