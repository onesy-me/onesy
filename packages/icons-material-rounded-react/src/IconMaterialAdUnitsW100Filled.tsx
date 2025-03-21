import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdUnitsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsW100Filled'

      short_name='AdUnits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-652q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsW100Filled.displayName = 'OnesyIconMaterialAdUnitsW100Filled';

export default IconMaterialAdUnitsW100Filled;
