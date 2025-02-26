import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieInfoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfoFilled'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm320-160q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600ZM160-200h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-360h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-520h80v-80h-80v80Zm560 0h80v-80h-80v80ZM160-680h80v-80h-80v80Zm560 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialMovieInfoFilled.displayName = 'OnesyIconMaterialMovieInfoFilled';

export default IconMaterialMovieInfoFilled;
