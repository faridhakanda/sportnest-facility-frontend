import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
        <div className='mx-auto my-auto justify-center items-center'>
            {/* <span className="loading loading-ring loading-xl"></span> */}
            <Spinner />
        </div>
    );
};

export default Loading;