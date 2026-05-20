'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const Footer = () => {
    const {
        data: session
    } = authClient.useSession()
    console.log(session, 'footer session');
    return (
        <div className='bg-blue-800 text-white p-2 text-center w-full'>
            <h2>Footer page for sportnest facility project!</h2>
            <p>&copy; All Right Reserved. 2026 with SportNest Ltd.</p>
        </div>
    );
};

export default Footer;