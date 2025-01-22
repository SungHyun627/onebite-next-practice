'use client';

import { useActionState, useEffect } from 'react';
import style from './review-editor.module.css';
import { creaeteReviewAction } from '@/actions/createt-review.action';

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(creaeteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea disabled={isPending} required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input disabled={isPending} required name="author" placeholder="작성자" />
          <button disabled={isPending} type="submit">
            {isPending ? '작성 중...' : '작성하기'}
          </button>
        </div>
      </form>
    </section>
  );
}
