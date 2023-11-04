"use client";

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation';
import classnames from 'classnames'


const Navbar = () => {
const currentPath = usePathname()
    const links = [
        {label: 'Dashbaord', href:'/'},
        {label: 'Issues', href:'/issues'}
    ]
  return (
<nav className='flex space-x-6 border-6 mb-5 px-5 h-14 items-center'>
    <Link href="/"><AiFillBug/></Link>
    <ul className='flex space-x-6'>
        {links.map((link) =>  <Link
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>)}
    </ul>
</nav>
  )
}

export default Navbar