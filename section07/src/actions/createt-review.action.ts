'use server';

import { revalidatePath } from 'next/cache';

export async function creaeteReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!content || !author) {
    return {
      status: false,
      error: '리뷰 내용과 작성자를 입력해주세요.',
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    revalidatePath(`/book/${bookId}`);
    return {
      status: true,
      message: '',
    };
  } catch (err) {
    return { status: false, error: `리뷰 작성에 실패했습니다. ${err}` };
  }
}
