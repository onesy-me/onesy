import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOff'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17zM1.49 3.76L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.41-1.41L2.9 2.35 1.49 3.76zM7 9.27L16.73 19H7V9.27z"/>
    </Icon>
  );
});

IconMaterialMobileOff.displayName = 'OnesyIconMaterialMobileOff';

export default IconMaterialMobileOff;
