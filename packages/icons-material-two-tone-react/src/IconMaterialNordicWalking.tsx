import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNordicWalking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalking'

      short_name='NordicWalking'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><path d="M19,23h-1.5v-9H19V23z M7.53,14H6l-2,9h1.53L7.53,14z M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M9.8,8.9L7,23h2.1l1.8-8l2.1,2v6h2v-7.5l-2.1-2l0.6-3C14.8,12,16.8,13,19,13v-2c-1.9,0-3.5-1-4.3-2.4l-1-1.6 c-0.56-0.89-1.68-1.25-2.65-0.84L6,8.3V13h2V9.6L9.8,8.9z"/>
    </Icon>
  );
});

IconMaterialNordicWalking.displayName = 'OnesyIconMaterialNordicWalking';

export default IconMaterialNordicWalking;
