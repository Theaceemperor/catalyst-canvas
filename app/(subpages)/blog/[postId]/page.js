'use client'
import { SubHeader } from '@/app/components/ReuseableComponents';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

// Dummy data for blog posts
const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'Content of the first blog post.', imgUrl: '/imgs/7.jpg' },
  { id: 2, title: 'Second Blog Post', content: 'Content of the second blog post.', imgUrl: '/imgs/9.jpg' },
  { id: 3, title: 'Third Blog Post', content: 'Content of the third blog post.', imgUrl: '/imgs/3.jpg' },
  { id: 4, title: 'Fourth Blog Post', content: 'Content of the fourth blog post.', imgUrl: '/imgs/2.jpg' },
  { id: 5, title: 'Fifth Blog Post', content: 'Content of the fifth blog post.', imgUrl: '/imgs/6.jpg' },
  { id: 6, title: 'Sixth Blog Post', content: 'Content of the sixth blog post.', imgUrl: '/imgs/1.jpg' },
  // Add more blog posts as needed
];

// Blog Post Page component
export default function Page() {
    const router = useRouter();

    //Access the url search params
    const searchParams = useSearchParams();

    // extract the projectId from the url
    const postId = searchParams.getAll('post')

    // Find the selected blog post
    const selectedPost = blogPosts.find((post) => post.id === parseInt(postId));

    if (!selectedPost) {
        // Handle case where the blog post is not found
        return <p>Blog post not found</p>;
    }

    const searchId = parseInt(postId);

    const handlePrevious = () => {
        if (searchId > 1) {
            router.push(`/blog/[postId]?post=${searchId - 1}`);
        } else if (searchId <= 1) {
            router.push('/blog')
        }
    }

    const handleNext = () => {
        if (blogPosts.find((p) => String(p.id) <= String(postId))) {
            router.push(`/blog/[postId]?post=${searchId + 1}`);
        } else {
            null
        }
    }

  return (
    <>
        <SubHeader backgroundImage={selectedPost.imgUrl} pageTitle={selectedPost.title} />
        <nav className="flex items-center w-full justify-between px-4 mt-8">
            <button className="bg-dark-ocean-blue text-white py-2 px-4 rounded-md hover:bg-white hover:text-ocean-blue" onClick={handlePrevious}>Previous</button>
            <button className="bg-ocean-blue text-white py-2 px-4 rounded-md hover:bg-white hover:text-ocean-blue" onClick={handleNext}>Next</button>
        </nav>
        <section className="container mx-auto my-16 px-2">
            <h2 className="text-3xl font-bold mb-8">{selectedPost.title}</h2>
            <p className="text-gray-600">{selectedPost.content}</p>
        </section>
    </>
  );
};