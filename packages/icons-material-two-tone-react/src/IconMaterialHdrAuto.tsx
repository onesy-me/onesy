import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAuto'

      short_name='HdrAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon opacity=".3" points="12.04,8.04 11.95,8.04 10.35,12.59 13.64,12.59"/><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M15.21,17l-0.98-2.81H9.78 l-1,2.81h-1.9l4.13-11h1.97l4.13,11H15.21z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z"/><path d="M11.01,6L6.88,17h1.9l1-2.81h4.44L15.21,17h1.9L12.98,6H11.01z M10.35,12.59l1.6-4.55h0.09l1.6,4.55H10.35z"/></g></g>
    </Icon>
  );
});

IconMaterialHdrAuto.displayName = 'OnesyIconMaterialHdrAuto';

export default IconMaterialHdrAuto;
