import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLow'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="1" opacity=".3" width="8" x="8" y="4"/><rect height="1" opacity=".3" width="8" x="8" y="19"/><rect height="7" width="2" x="20" y="10"/><rect height="7" width="2" x="2" y="7"/><path d="M16,2.01L8,2C6.9,2,6,2.9,6,4v16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2.01,16,2.01z M16,20H8v-1h8V20z M16,17H8V7h8V17z M16,5H8V4h8V5z"/></g></g>
    </Icon>
  );
});

IconMaterialEdgesensorLow.displayName = 'OnesyIconMaterialEdgesensorLow';

export default IconMaterialEdgesensorLow;
