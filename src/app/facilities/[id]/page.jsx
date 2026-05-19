import FacilityCard from '@/components/ui/facilityCard';
import { getFacilityDetailById } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const FacilityDetailPage = async ({ params }) => {
    const { id } = await params;
    console.log('id: ', id);
    const facilityDetails = await getFacilityDetailById(id);
    console.log(facilityDetails, 'facility details by id!');
    return (
        <div className='mx-auto border-1 border-purple-500 my-4 px-4 py-4 rounded-md shadow-sm'>
            <h2>{id}</h2>
            <FacilityCard facility={facilityDetails} />
            <Link href={'/'}>
                <Button className={'rounded-md mx-auto my-2'} variant='outline'>
                    Go to Home
                </Button>
            </Link>
        </div>
    );
};

export default FacilityDetailPage;