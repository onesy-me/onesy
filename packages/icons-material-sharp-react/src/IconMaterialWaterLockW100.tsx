import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLockW100'

      short_name='WaterLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160v-400 400Zm120-428h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM212-132v-456h120v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h120v189q-4 0-7.5-.5t-7.35-.5H720v-160H240v400h334q3 8 6.5 14.5T589-132H212Zm523.06 0q-31.06 0-52.56-21.46Q661-174.92 661-206q0-14 5-27t13.93-23.25L735-317l55.07 60.75Q799-246 804-233t5 27q0 31.08-21.44 52.54Q766.11-132 735.06-132ZM480-306q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306Z"/>
    </Icon>
  );
});

IconMaterialWaterLockW100.displayName = 'OnesyIconMaterialWaterLockW100';

export default IconMaterialWaterLockW100;
