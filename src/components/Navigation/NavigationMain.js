'use client'
import Image from 'next/image';
import { useState } from 'react';
const links = [
  {
    label: 'Home',
    route: '/home'
  },
  {
    label: 'Room',
    route: '/room'
  },
  {
    label: 'Reservation',
    route: '/reservation'
  },
  {
    label: 'Blog',
    route: '/blog'
  },
  {
    label: 'Contract',
    route: '/contract'
  }
]
export default function NavigationMain() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-20 w-full fixed bg-white items-center px-4 justify-between shadow-md' >
      <div className='container mx-auto flex justify-between md:grid grid-cols-4 align-middle h-full items-center'>
        <div className='logo'>
          <Image
            src="/logo-image.png"
            alt="Rabbitmansion logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className='col-span-2 hidden md:block'>
          <ul className='flex justify-evenly'>
            {
              links.map(v => <li key={v.label} className={`cursor-pointer relative hover:z-10 before:content-['${v.label}'] before:text-white hover:before:z-0  hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-pink-500`} > {v.label}</li>)
            }
          </ul>
        </div>
        <div className={`cursor-pointer w-10 ${isOpen ? 'change' : ''} md:hidden col-span-3`} onClick={toggleMenu}>
          <div className={`h-1 bg-gray-800 my-2 transition-transform duration-300 ${isOpen ? 'transform translate-y-3 rotate-45' : ''}`}></div>
          <div className={`h-1 bg-gray-800 my-2 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-1 bg-gray-800 my-2 transition-transform duration-300 ${isOpen ? 'transform -translate-y-3 -rotate-45' : ''}`}></div>
        </div>
      </div>
    </div >
  );
}
