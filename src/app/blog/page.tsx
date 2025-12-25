// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export default function BlogList() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);

  const posts = files.map(filename => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      title: data.title || filename,
      date: data.date,
      excerpt: data.excerpt
    };
  });

  return (
    <div className="max-w-3xl mx-auto mt-12 text-right">
      <h1 className="text-4xl font-bold mb-10">آخرین مقالات ✍️</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-6 bg-white border rounded-2xl hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{post.title}</h2>
            <p className="text-gray-500 mt-2">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-400">{post.date}</span>
              <span className="text-blue-500"> ادامه مطلب ←</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}