import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOut'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="12" opacity=".3" r="5"/><path d="M4 4v4l4-4zm12 0l4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </Icon>
  );
});

IconMaterialAllOut.displayName = 'OnesyIconMaterialAllOut';

export default IconMaterialAllOut;
