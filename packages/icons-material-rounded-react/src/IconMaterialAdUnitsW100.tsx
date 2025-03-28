import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdUnitsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsW100'

      short_name='AdUnits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-652q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-28h400v-532H280v532Zm0-560h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsW100.displayName = 'OnesyIconMaterialAdUnitsW100';

export default IconMaterialAdUnitsW100;
