import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendToMobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobile'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="1" opacity=".3" width="10" x="7" y="3"/><g><rect height="1" opacity=".3" width="10" x="7" y="20"/><path d="M22,12l-4-4v3h-5v2h5v3L22,12z M17,18H7V6h10v1h2V3c0-1.1-0.9-2-2-2L7,1.01C5.9,1.01,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10 c1.1,0,2-0.9,2-2v-4h-2V18z M7,3h10v1H7V3z M17,21H7v-1h10V21z"/></g></g></g>
    </Icon>
  );
});

IconMaterialSendToMobile.displayName = 'OnesyIconMaterialSendToMobile';

export default IconMaterialSendToMobile;
