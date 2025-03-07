import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIron = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Iron'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M15,16H4v-1c0-1.1,0.9-2,2-2h9V16z" opacity=".3"/><path d="M21,6c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v3h15v-2c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h1V6H21z M15,16H4v-1c0-1.1,0.9-2,2-2h9 V16z"/>
    </Icon>
  );
});

IconMaterialIron.displayName = 'OnesyIconMaterialIron';

export default IconMaterialIron;
