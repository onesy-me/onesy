import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureW100Filled'

      short_name='Nature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-154v-198H360q-62 0-105-43t-43-105q0-51 35-89t83-59q8-80 48-120t102-40q62 0 102 40t48 120q49 19 83.5 58t34.5 90q0 62-43 105t-105 43H494v198h200q6 0 10 4t4 10q0 6-4 10t-10 4H266q-6 0-10-4t-4-10q0-6 4-10t10-4h200Z"/>
    </Icon>
  );
});

IconMaterialNatureW100Filled.displayName = 'OnesyIconMaterialNatureW100Filled';

export default IconMaterialNatureW100Filled;
