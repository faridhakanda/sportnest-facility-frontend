import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav className='bg-slate-50 flex p-2 items-center justify-around'>
            <div>Header Part</div>
            <div className='space-x-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/facilities'}>Facility</Link>
                <Link href={'/add-facility'}>Add Facility</Link>
            </div>
            
        </nav>
    );
};

export default Header;