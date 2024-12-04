

import React from "react";
import Info from '../../../../components/pages/InfoPages/Info'


export default function AnimeInfoLayout({ params }) {
  // Unwrap the `params` Promise
  const { id } = React.use(params);

  return (
  <div>
    <Info/>

      <p>Anime ID: {id}</p>
    </div>
  );
}