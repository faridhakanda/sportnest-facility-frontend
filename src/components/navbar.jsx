'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    
    const {
        data: session,
        isPending,
    } = authClient.useSession()
    console.log(session, 'session data');
    const user = session?.user;
    console.log(user, 'user')
    const handleLogout = async() => {
        await authClient.signOut()
    }
    return (
        <nav className='bg-slate-50 shadow-sm flex p-2 items-center justify-around'>
            <div>
                <Link href={'/'}>SportNest</Link>
            </div>
            <div className='space-x-4 flex'>
                <Link href={'/'}>Home</Link>
                <Link href={'/facilities'}>Facility</Link>
                <Link href={'/add-facility'}>Add Facility</Link>
                <Link href={'/contact'}>Contact Us</Link>
                {isPending ? 
                    (<h2>Loading...</h2>)
                    :
                    (user ? 
                        <div>
                            <h2>{user?.name}</h2>
                            <Link onClick={handleLogout}  href={'/login'}>Logout</Link>
                        </div>
                        :
                        <div className='flex gap-3'>
                            <Link href={'/login'}>Login</Link>
                            <Link href={'/signup'}>SignUp</Link>
                        </div>
                    )
                }
                
                
            </div>
            
        </nav>
    );
};

export default Navbar;