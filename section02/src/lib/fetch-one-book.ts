import { BookData } from '@/types';

export default async function fetchOneBook(id: number): Promise<BookData | null> {
  const url = `https://onebite-books-server-5qq31bmx1-sunghyun627s-projects.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
