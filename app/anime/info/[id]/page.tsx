"use client";

import React from "react";

export default function AnimeInfoLayout({ params }) {
  // Unwrap the `params` Promise
  const { id } = React.use(params);

  return (
    <div>
      <h1>Anime Info</h1>
      <p>Anime ID: {id}</p>
    </div>
  );
}