import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScubaDivingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingW100Filled'

      short_name='ScubaDiving'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m155-76-23-17 102-136 33-185q2-17 13-29.5t28-16.5l390-118 78-172 99-98 21 19-94 99-70 174-184 132-242 77-49 134L155-76Zm-35-290q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Zm232-191q-17 5-33.5-4T297-588q-5-17 4.5-33.5T328-643l167-50 22 86-165 50Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingW100Filled.displayName = 'OnesyIconMaterialScubaDivingW100Filled';

export default IconMaterialScubaDivingW100Filled;
