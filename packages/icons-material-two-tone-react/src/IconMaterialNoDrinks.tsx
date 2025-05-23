import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoDrinks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinks'

      short_name='NoDrinks'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><polygon opacity=".3" points="14.77,9 11.83,9 13.38,10.56"/><path d="M21.19,21.19L2.81,2.81L1.39,4.22l8.23,8.23L11,14v5H6v2h12v-0.17l1.78,1.78L21.19,21.19z M13,19v-3.17L16.17,19H13z M7.83,5l-2-2H21v2l-6.2,6.97l-1.42-1.42L14.77,9h-2.94l-2-2h6.74l1.78-2H7.83z"/></g>
    </Icon>
  );
});

IconMaterialNoDrinks.displayName = 'OnesyIconMaterialNoDrinks';

export default IconMaterialNoDrinks;
