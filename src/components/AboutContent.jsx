import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
    return (
        <div>
            <h1 className='text-center absolute top-32'>About Blogs Content</h1>
            <div>
            <Link className='bg-white text-black font-semibold py-2 px-4 mx-4' href={'/about-us/history'}>History</Link>
            <Link className='bg-white text-black font-semibold py-2 px-4 mx-4' href={'/about-us/mission'} >Mission</Link>
            </div>
        </div>
    );
};

export default AboutContent;