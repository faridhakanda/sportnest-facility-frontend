'use client'
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h2>Error Page for server fault!</h2>
            <Link href={'/'}>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;