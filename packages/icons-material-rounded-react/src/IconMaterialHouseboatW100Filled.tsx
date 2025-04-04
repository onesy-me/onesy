import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseboatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatW100Filled'

      short_name='Houseboat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-292q-43 0-64 20t-69 20q-47 0-70-20t-63-20q-31 0-50 16t-43 22q-6 2-10.5-2.5T106-267q0-7 4.5-12t10.5-7q23-10 40.5-22t51.5-12q48 0 71.5 20t61.5 20q41 0 64.5-20t69.5-20q46 0 69.5 20t64.5 20q38 0 61.5-20t71.5-20q37 0 52.5 11.5T839-286q6 2 10.5 7t4.5 12q0 6-4.5 10.5T839-254q-24-6-44-22t-49-16q-40 0-63 20t-70 20q-48 0-69-20t-64-20ZM270-412q-19 0-36.5-6.5T203-439l-27-28q-4-4-3.5-9.5t4.5-9.5q4-4 9-4t9 4l28 27q9 9 21 14t26 5h62v-173l-42 31q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l171-127q8-6 17-8.5t19-2.5q10 0 19 2.5t17 8.5l170 126q5 4 5.5 9.5T688-585q-4 5-9 6t-10-3l-41-30v172h62q14 0 26-5t21-14l28-27q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5l-27 27q-14 14-31 21t-36 7H270Zm224-28v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66h28Z"/>
    </Icon>
  );
});

IconMaterialHouseboatW100Filled.displayName = 'OnesyIconMaterialHouseboatW100Filled';

export default IconMaterialHouseboatW100Filled;
