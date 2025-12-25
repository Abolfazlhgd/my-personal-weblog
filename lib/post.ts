import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData } from './type';

const postsDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // اینجا به تایپ‌اسکریپت می‌گوییم خروجی دقیقا مطابق PostData است
    return {
      id,
      ...(matterResult.data as { title: string; date: string; category?: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}