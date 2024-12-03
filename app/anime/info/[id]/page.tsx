"use client";

import { useRouter } from 'next/router';

export default function AnimeInfoLayout({ content }: { content: React.ReactNode }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Anime ID: {id}</h1>
      {content}
    </>
  );
}