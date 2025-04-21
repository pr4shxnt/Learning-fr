import React, { useState } from 'react';
import UserSidebars from '../Sidebars/UserSidebars';
import { Outlet } from 'react-router-dom';
import ResponsiveNavbar from './RootSubComponents/ResponsiveNavbar';

const UserRoot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='relative h-full'>
      <div className="hidden lg:block">
      <UserSidebars isOpen={isOpen} setIsOpen={setIsOpen} /></div>
      <div className=" p-4 md:pl-18">
        <Outlet />
      </div>
      <div className="fixed w-full lg:hidden bottom-0">
      <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default UserRoot;
