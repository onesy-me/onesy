import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovie = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Movie'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 10H5.76L4 6.47V18h16z" opacity=".3"/><path d="M2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2zM4 6.47L5.76 10H20v8H4V6.47z"/>
    </Icon>
  );
});

IconMaterialMovie.displayName = 'OnesyIconMaterialMovie';

export default IconMaterialMovie;
