import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsKrxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxW100'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480q0 45 11.5 87t33.5 78q4 6 3.5 12t-5.5 10q-5 4-11 1.5t-9-7.5q-24-40-37.5-85.5T132-480q0-50 13.5-95.5T183-661q3-5 9-7.5t11 1.5q5 4 5.5 10t-3.5 12q-22 36-33.5 78T160-480Zm320 220q-91 0-155.5-64.5T260-480q0-91 64.5-155.5T480-700q91 0 155.5 64.5T700-480q0 91-64.5 155.5T480-260Zm0-28q80 0 136-56t56-136q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 80 56 136t136 56Zm320-192q0-45-12-87t-34-78q-4-6-3-12t6-10q5-4 11-1.5t9 7.5q24 40 37.5 85.5T828-480q0 50-13.5 95.5T777-299q-3 5-9 7.5t-11-1.5q-5-4-6-10t3-12q22-36 34-78t12-87Zm-320 0Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxW100.displayName = 'OnesyIconMaterialSensorsKrxW100';

export default IconMaterialSensorsKrxW100;
