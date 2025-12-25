"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gray-100 flex gap-4 border-b" dir="rtl">
      <Link
        href="/"
        className={
          pathname === "/" ? "text-red-600 font-bold" : "text-blue-600"
        }
      >
        صفحه اصلی
      </Link>
      <Link
        href="/blog"
        className={
          pathname.startsWith("/blog")
            ? "text-red-600 font-bold underline"
            : "text-blue-600"
        }
      >
        وبلاگ
      </Link>
    </nav>
  );
}
