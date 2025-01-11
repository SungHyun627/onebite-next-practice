import { BookData } from '@/types';

export default async function fetchBooks(q?: string): Promise<BookData[]> {
<<<<<<< HEAD
  let url = 'https://onebite-books-server-5qq31bmx1-sunghyun627s-projects.vercel.app/book';
=======
  let url = 'onebite-books-server-5qq31bmx1-sunghyun627s-projects.vercel.app/book';
>>>>>>> bed92a6341ea8d48010de4b399fca266a0ce586e

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
