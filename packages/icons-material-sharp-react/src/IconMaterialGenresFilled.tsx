import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGenresFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GenresFilled'

      short_name='Genres'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240q50 0 85-35t35-85v-280h120v-80H460v256q-14-8-29-12t-31-4q-50 0-85 35t-35 85q0 50 35 85t85 35Zm80 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialGenresFilled.displayName = 'OnesyIconMaterialGenresFilled';

export default IconMaterialGenresFilled;
