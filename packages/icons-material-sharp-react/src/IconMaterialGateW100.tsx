import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateW100'

      short_name='Gate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-338v-284h28v284h-28Zm96 64v-302q0-46 32.31-78 32.32-32 77.69-32h192q46 0 78 32t32 78v302H274Zm480-64v-284h28v284h-28ZM480-480ZM302-302h164v-164h-64v-28h64v-164h-82.12Q350-658 326-633.91q-24 24.08-24 57.91v274Zm192 0h164v-274q0-33.83-24.09-57.91Q609.83-658 576-658h-82v164h64v28h-64v164Z"/>
    </Icon>
  );
});

IconMaterialGateW100.displayName = 'OnesyIconMaterialGateW100';

export default IconMaterialGateW100;
