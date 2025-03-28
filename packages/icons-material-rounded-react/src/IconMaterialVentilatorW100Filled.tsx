import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVentilatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VentilatorW100Filled'

      short_name='Ventilator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-152q-81 0-151.5-31T204-268q-8 4-15.5 6t-16.5 2q-29 0-48.5-19.5T104-328q0-16 6-29t17-22q-11-25-19-51.5T96-485q-1-6 2.5-11t9.5-6q6-1 10.5 3.5T124-488q4 26 11 49t17 46q5-2 10-2.5t10-.5q29 0 48.5 19.5T240-328q0 12-4 22.5T225-286q47 48 109 75.5T466-180v-198q0-27-19.5-46.5T400-444q-56 0-95-39t-39-95q0-56 39-95t95-39h82v-4q0-25 17.5-42.5T542-776h116q25 0 42.5 17.5T718-716v4h32q6 0 10 4t4 10q0 6-4 10t-10 4h-32v4q0 25-17.5 42.5T658-620H542q-25 0-42.5-17.5T482-680v-4h-82q-45 0-75.5 30.5T294-578q0 45 30.5 75.5T400-472q39 0 66.5 27.5T494-378v198q107-4 191.5-64.5T811-400l-34-17q-3-1-4.5-3t-2-5q-.5-3-.5-5.5t1-5.5q1-3 3-4.5t5-2.5q3-1 5.5-.5t5.5 1.5l31 16q5-15 9-30.5t6-31.5q1-6 6-10.5t11-3.5q6 1 9.5 6t2.5 11q-3 19-7.5 37T847-413l32 15q3 1 4.5 3t2.5 5q1 3 .5 5.5T885-379q-1 3-3 4.5t-5 2q-3 .5-5.5.5t-5.5-1l-29-14q-45 105-141 170t-216 65Z"/>
    </Icon>
  );
});

IconMaterialVentilatorW100Filled.displayName = 'OnesyIconMaterialVentilatorW100Filled';

export default IconMaterialVentilatorW100Filled;
