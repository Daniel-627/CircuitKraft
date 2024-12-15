'use client'
// components/FeaturedBlogList.tsx
import { useEffect, useState } from "react";
import { fetchFeaturedPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function FeaturedBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const featuredPosts = await fetchFeaturedPosts(2, 4); // Start from 2nd item and get 2 posts
      setPosts(featuredPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p>No additional featured posts available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-3 cursor-pointer border-t-2 mx-4">
            <div className="mt-1">
              <p className="text-xs text-blue-500 mt-2">{post.latestCategory}</p>
              <h2 className="text-base font-medium">{post.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
