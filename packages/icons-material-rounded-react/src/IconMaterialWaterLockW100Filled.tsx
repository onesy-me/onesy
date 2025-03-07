import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLockW100Filled'

      short_name='WaterLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M735.06-132q-31.06 0-52.56-21.46Q661-174.92 661-206q0-14 5-27t13.81-23.11L718-298q6.94-8 16.97-8 10.03 0 17.03 8l38.19 41.89Q799-246 804-233t5 27q0 31.08-21.44 52.54Q766.11-132 735.06-132ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm120 282q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v108q0 8-6 15t-15 7q-43 2-80.5 23T586-318q-23 36-25 78.5t15.38 82.36Q580-148 575-140t-14 8H272Z"/>
    </Icon>
  );
});

IconMaterialWaterLockW100Filled.displayName = 'OnesyIconMaterialWaterLockW100Filled';

export default IconMaterialWaterLockW100Filled;
