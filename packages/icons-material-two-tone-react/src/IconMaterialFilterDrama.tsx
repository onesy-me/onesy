import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterDrama = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDrama'

      short_name='FilterDrama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 12h-1.5v-.5C17.5 8.47 15.03 6 12 6c-1.8 0-3.39.88-4.4 2.22 2.54.7 4.4 3.02 4.4 5.78h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4h13c1.65 0 3-1.35 3-3s-1.35-3-3-3z" opacity=".3"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"/>
    </Icon>
  );
});

IconMaterialFilterDrama.displayName = 'OnesyIconMaterialFilterDrama';

export default IconMaterialFilterDrama;
