import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobiledataOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOff'

      short_name='MobiledataOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon points="16,7 19,7 15,3 11,7 14,7 14,11.17 16,13.17"/><polygon points="2.81,2.81 1.39,4.22 8,10.83 8,17.01 5,17.02 9,21 13,17 10,17.01 10,12.83 19.78,22.61 21.19,21.19"/></g></g>
    </Icon>
  );
});

IconMaterialMobiledataOff.displayName = 'OnesyIconMaterialMobiledataOff';

export default IconMaterialMobiledataOff;
