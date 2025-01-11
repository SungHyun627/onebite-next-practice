import { BookData } from '@/types';

export default async function fetchOneBook(id: number): Promise<BookData | null> {
  const url = `https://onebite-books-server-g9vomaz5h-sunghyun627s-projects.vercel.app/book/${id}`;

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
