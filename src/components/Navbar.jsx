'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title: 'About',
            path: '/about-us',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Portfolio',
            path: '/portfolio',
        },
    ]

    const handler = () => {
        router.push('/')
    }

    return (
        <nav className='bg-red-500 p-4 flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>Next <span className='text-slate-950'>Hero</span> </h2>
          <ul className='flex items-center gap-8'>
            {
                links.map((link) => <Link className={`${pathName === link.path && "text-slate-900 font-semibold"}`} key={link.path} href={link.path} >{link.title}</Link> )
            }
          </ul>
          <button onClick={handler} className='bg-white py-2 px-5 rounded-sm font-bold text-slate-900' >Login</button>
        </nav>
    );
};

export default Navbar;