import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMoped = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMoped'

      short_name='ElectricMoped'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,11v1h4V9H6C4.9,9,4,9.9,4,11z" opacity=".3"/><path d="M19,5c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,12H10V7H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,8.35V5z M7,15c-0.55,0-1-0.45-1-1h2C8,14.55,7.55,15,7,15z M8,12H4v-1c0-1.1,0.9-2,2-2h2V12z"/><rect height="2" width="5" x="5" y="4"/><path d="M19,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,11,19,11z M19,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,15,19,15z"/></g><polygon points="7,20 11,20 11,18 17,21 13,21 13,23"/></g>
    </Icon>
  );
});

IconMaterialElectricMoped.displayName = 'OnesyIconMaterialElectricMoped';

export default IconMaterialElectricMoped;
