import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityUpdateWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarning'

      short_name='SecurityUpdateWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M11,7h2v6h-2V7z M11,15h2v2h-2V15z" opacity=".3"/><rect height="2" width="2" x="11" y="15"/><rect height="6" width="2" x="11" y="7"/></g><path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z"/><path d="M7,21h10v-1H7V21z M7,3v1h10V3H7z" opacity=".3"/></g></g>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarning.displayName = 'OnesyIconMaterialSecurityUpdateWarning';

export default IconMaterialSecurityUpdateWarning;
