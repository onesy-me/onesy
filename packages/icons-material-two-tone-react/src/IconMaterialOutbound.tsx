import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutbound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Outbound'

      short_name='Outbound'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" x="0" y="0"/><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M13.88,11.54l-4.96,4.96 l-1.41-1.41l4.96-4.96L10.34,8l5.65,0.01L16,13.66L13.88,11.54z" opacity=".3"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2L12,2z M13.88,11.54l-4.96,4.96l-1.41-1.41l4.96-4.96L10.34,8l5.65,0.01L16,13.66L13.88,11.54z"/>
    </Icon>
  );
});

IconMaterialOutbound.displayName = 'OnesyIconMaterialOutbound';

export default IconMaterialOutbound;
