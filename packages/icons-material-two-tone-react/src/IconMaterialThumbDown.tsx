import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDown'

      short_name='ThumbDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M3 12v2h9l-1.34 5.34L15 15V5H6z" opacity=".3"/><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"/>
    </Icon>
  );
});

IconMaterialThumbDown.displayName = 'OnesyIconMaterialThumbDown';

export default IconMaterialThumbDown;
