import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

// ۱. اضافه کردن این تابع برای تغییر عنوان تب مرورگر
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: data.title || "مقاله وبلاگ", // عنوانی که در تب مرورگر نمایش داده می‌شود
      description: data.excerpt || "توضیحات مقاله",
    };
  } catch {
    return { title: "مقاله پیدا نشد" };
  }
}
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  // ۱. تعریف متغیرهای مورد نیاز بیرون از بلوک try
  let htmlContent = "";
  let data: any = {};

  try {
    // ۲. فقط کارهای "خطرناک" مثل خواندن فایل را داخل try انجام می‌دهیم
    const fileRawContent = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileRawContent);
    data = parsed.data;
    htmlContent = await marked.parse(parsed.content);
  } catch (error) {
    // ۳. اگر فایلی نبود، بلافاصله یک پیام خطا برگردان و از تابع خارج شو
    return (
      <div className="text-center mt-20 font-bold text-red-500 text-2xl">
        ⚠️ مقاله پیدا نشد!
      </div>
    );
  }

  // ۴. حالا با خیال راحت و بدون خط قرمز، ظاهر اصلی را رندر کن
  return (
    <div className="max-w-3xl mx-auto mt-16 p-8 bg-white shadow-sm rounded-3xl text-right">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-black text-gray-900 mb-4">{data.title}</h1>
        <div className="text-gray-400 text-sm">
          نوشته شده توسط {data.author} در تاریخ {data.date}
        </div>
      </header>

      <article
        className="prose lg:prose-xl max-w-none text-right dir-rtl"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <div className="mt-12 text-gray-400 text-sm italic">
        پایان مطالعه مقاله
      </div>
    </div>
  );
}
