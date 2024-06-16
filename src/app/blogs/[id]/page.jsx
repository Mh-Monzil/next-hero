import React from 'react';

const page = ({params}) => {
    console.log(params);
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

    const singleBlog = blogs.find(blog => blog.id == params.id)

    return (
        <div className='flex flex-col'>
            <p>Name: {singleBlog.name}</p>
            <p>Info: {singleBlog.info}</p>
        </div>
    );
};

export default page;