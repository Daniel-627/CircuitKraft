// app/categories/page.tsx
import { blogPosts } from '../../data/blogs';
import Link from 'next/link';

export default function CategoriesPage() {
  // Extract unique categories from blog posts
  const categories = Array.from(
    new Set(blogPosts.flatMap((post) => post.categories))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category} className="border rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <Link href={`/categories/${category.toLowerCase()}`}>
              <p className="text-blue-500 hover:underline">View Posts</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}