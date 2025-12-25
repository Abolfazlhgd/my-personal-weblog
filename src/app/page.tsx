
import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";
// import BlogList from "./blog/page";


export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">مقالات جدید</h2>
      <ul className="list-disc pr-5">
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id} className="mb-2">
            <Link
              href={`/blog/${id}`}
              className="text-blue-500 hover:underline"
            >
              {title}
            </Link>
            {/* <BlogList /> */}
            <br />
            <small className="text-gray-500">{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
