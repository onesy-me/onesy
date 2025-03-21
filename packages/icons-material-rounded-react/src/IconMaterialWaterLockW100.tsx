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
      <path d="M240-160v-400 400Zm120-428h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v111q0 6.5-4.32 9.75t-9.5 3.25q-5.18 0-9.68-3.5T720-418v-110q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9h296q7 0 10.5 4.32t3.5 9.5q0 5.18-3.5 9.68T568-132H272Zm463.06 0q-31.06 0-52.56-21.46Q661-174.92 661-206q0-14 5-27t13.81-23.11L718-298q6.94-8 16.97-8 10.03 0 17.03 8l38.19 41.89Q799-246 804-233t5 27q0 31.08-21.44 52.54Q766.11-132 735.06-132ZM480-306q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306Z"/>
    </Icon>
  );
});

IconMaterialWaterLockW100.displayName = 'OnesyIconMaterialWaterLockW100';

export default IconMaterialWaterLockW100;
