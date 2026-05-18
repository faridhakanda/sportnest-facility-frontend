import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>Header Part</h2>
            <Link href={'/'}>Home</Link>
            <Link href={'/facilities'}>Facility</Link>
        </div>
    );
};

export default Header;