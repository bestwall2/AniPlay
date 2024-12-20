

import React from "react";
import Info from "../../../../components/pages/InfoPages/Info";

interface AnimeInfoParams {
  id: string;
}

export default async function AnimeInfoLayout({
  params,
}: {
  params: Promise<AnimeInfoParams>;
}) {
  // Await the `params` Promise
  const { id } = await params;

  return (
    <div>
      <Info />
      <p>Anime ID: {id}</p>
    </div>
  );
}