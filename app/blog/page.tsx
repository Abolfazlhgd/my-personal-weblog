// app/blog/page.tsx
import Link from 'next/link'

export default function BlogList() {
  const posts = [
    { id: 1, title: "آموزش نکست‌جی‌اس", slug: "nextjs-learning" },
    { id: 2, title: "تایپ‌اسکریپت چیست؟", slug: "what-is-typescript" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 text-right">
      <h1 className="text-3xl font-bold mb-6">مقالات جدید ✍️</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-xl hover:bg-gray-50">
            {/* استفاده از Link برای جابه‌جایی سریع بین صفحات */}
            <Link href={`/blog/${post.slug}`} className="text-xl text-blue-600">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}