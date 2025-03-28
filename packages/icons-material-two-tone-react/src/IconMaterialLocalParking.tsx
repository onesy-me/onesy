import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalParking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParking'

      short_name='LocalParking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
    </Icon>
  );
});

IconMaterialLocalParking.displayName = 'OnesyIconMaterialLocalParking';

export default IconMaterialLocalParking;
