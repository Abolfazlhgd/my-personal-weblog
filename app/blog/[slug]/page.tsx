// app/blog/[slug]/page.tsx

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // در نسخه جدید نکست‌جی‌اس باید از params استفاده کنیم
  const { slug } = await params;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6">
      <h1 className="text-4xl font-bold mb-4 text-right">
        مقاله: {slug.replace('-', ' ')}
      </h1>
      <p className="text-gray-600 leading-relaxed text-right">
        این صفحه به صورت داینامیک برای آدرس "{slug}" ساخته شده است.
      </p>
      
      <div className="mt-10 p-4 bg-yellow-50 border-r-4 border-yellow-400 text-right">
        نکته: در مرحله بعد یاد می‌گیریم چطور محتوای واقعی را بر اساس این اسم از یک فایل یا دیتابیس بخوانیم.
      </div>
    </div>
  );
}