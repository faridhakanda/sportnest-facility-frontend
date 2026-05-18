import FacilityCard from '@/components/ui/facilityCard';
import { getAllSportFacilities } from '@/lib/data';
import React from 'react';

const Facilities = async() => {
    const facilities = await getAllSportFacilities();
    return (
        <div className='grid grid-cols-3 mx-auto gap-2 my-4'>
            {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}/>)}
        </div>
    );
};

export default Facilities;