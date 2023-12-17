'use client'
import { SectionHeader, SubHeader } from "@/app/components/ReuseableComponents";
import { useRouter } from "next/navigation";

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

export default function Page() {
    const router = useRouter();

    // Function to handle clicking on a blog post
    const handleBlogPostClick = (postId) => {
      // Redirect to the dynamic blog post page
      router.push(`/blog/[postId]?post=${postId}`);
    };
  
    return (
        <main>
            <SubHeader backgroundImage={'imgs/9.jpg'} pageTitle={'Our Blog'} />
            <section className="container mx-auto my-16 px-2">
                <SectionHeader headerLink={'#blog'} headerText={'Blog'} />

                {/* Blog Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 border border-gray-300 rounded-md cursor-pointer hover:shadow hover:shadow-shadow-color hover:bg-light-blue"
                        onClick={() => handleBlogPostClick(post.id)}
                    >
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.content}</p>
                    </div>
                    ))}
                </div>
            </section>
        </main>
    )
}