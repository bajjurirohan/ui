import React from 'react';

import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsChatSquare} from 'react-icons/bs';

import{Link} from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container w-fill bg-black/20 rounded-full flex
     justify-between items-center max-w-[460px] mx-auto px-5 h-[96]'>
      <Link to='main' activeClass='active' smooth={true} spy={true} offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
       <BiHomeAlt/>
      </Link>
      <Link to='about' activeClass='active' smooth={true} spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
       <BiUser/>
      </Link>
      <Link to='skills' activeClass='active' smooth={true} spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
       <BsClipboardData/>
      </Link>
      <Link to='info' activeClass='active' smooth={true} spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
       <BsChatSquare/>
      </Link>
      
    </div>
    </nav>;
};

export default Nav;
