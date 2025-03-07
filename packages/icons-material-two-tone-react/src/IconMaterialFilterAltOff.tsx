import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOff'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon opacity=".3" points="8.83,6 16.95,6 13.38,10.55"/><g><path d="M16.95,6l-3.57,4.55l1.43,1.43c1.03-1.31,4.98-6.37,4.98-6.37C20.3,4.95,19.83,4,19,4H6.83l2,2H16.95z"/><path d="M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z"/></g></g>
    </Icon>
  );
});

IconMaterialFilterAltOff.displayName = 'OnesyIconMaterialFilterAltOff';

export default IconMaterialFilterAltOff;
