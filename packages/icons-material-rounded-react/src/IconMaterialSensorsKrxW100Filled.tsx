import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsKrxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxW100Filled'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480q0 45 11 87t34 78q4 6 4 12t-6 10q-5 4-11 1.5t-9-7.5q-25-41-38-86t-13-95q0-50 13-95t38-86q3-5 9-7.5t11 1.5q6 4 6 10t-4 12q-23 36-34 78t-11 87Zm320 220q-91 0-155.5-64.5T260-480q0-91 64.5-155.5T480-700q91 0 155.5 64.5T700-480q0 91-64.5 155.5T480-260Zm320-220q0-45-11.5-87T754-645q-4-6-3.5-12t6.5-10q5-4 11-1.5t9 7.5q25 41 38 86t13 95q0 50-13 95t-38 86q-3 5-9 7.5t-11-1.5q-6-4-6.5-10t3.5-12q23-36 34.5-78t11.5-87Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxW100Filled.displayName = 'OnesyIconMaterialSensorsKrxW100Filled';

export default IconMaterialSensorsKrxW100Filled;
