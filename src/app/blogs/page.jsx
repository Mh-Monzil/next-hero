import AboutContent from '@/components/AboutContent';
import Link from 'next/link';
import React from 'react';

const page = () => {
    const blogs = [
        {
            id: 1,
            name: "Burger",
            info: "This is BURGER"
        },
        {
            id: 2,
            name: "Pizza",
            info: "This is PIZZA"
        },
        {
            id: 3,
            name: "Steak",
            info: "This is STEAK"
        },
    ]
    return (
        <div>
            <h2 className=' text-center font-bold  text-3xl'>Blogs</h2>
            <div>
                {
                    blogs.map(blog => (
                        <div key={blog.id} className='p-10 border-red-500 border-2 w-full'>
                            <h2>{blog.name}</h2>
                            <button className='bg-white text-black'>
                                <Link href={`/blogs/${blog.id}`}>More...</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;