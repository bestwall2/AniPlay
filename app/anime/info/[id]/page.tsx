

import React from "react";
import Info from '../../../../components/pages/InfoPages/Info'

interface AnimeInfoParams {
    id: string;
  //  }

}

export default function AnimeInfoLayout({ params } : {params: AnimeInfoParams}) {
  // Unwrap the `params` Promise
  const { id } = React.use(params);

  return (
  <div>
    <Info/>

      <p>Anime ID: {id}</p>
    </div>
  );
}