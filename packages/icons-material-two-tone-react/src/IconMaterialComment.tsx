import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Comment'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/>
    </Icon>
  );
});

IconMaterialComment.displayName = 'OnesyIconMaterialComment';

export default IconMaterialComment;
