import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCountertops = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Countertops'

      short_name='Countertops'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M6,6h2v2H6V6z M6,18v-6h5v6H6z M18,18h-5v-6h5V18z" opacity=".3"/><path d="M22,10h-4V7c0-1.66-1.34-3-3-3c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1v3H8c1.1,0,2-0.9,2-2V4H4v4 c0,1.1,0.9,2,2,2H2v2h2v8h16v-8h2V10z M6,6h2v2H6V6z M6,18v-6h5v6H6z M18,18h-5v-6h5V18z"/>
    </Icon>
  );
});

IconMaterialCountertops.displayName = 'OnesyIconMaterialCountertops';

export default IconMaterialCountertops;
