'use client'
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='mx-auto my-auto justify-center items-center bg-purple-200'>
            <h2>Error Page for server fault!</h2>
            <Link href={'/'}>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;