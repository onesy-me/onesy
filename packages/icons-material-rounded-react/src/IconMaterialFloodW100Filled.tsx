import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodW100Filled'

      short_name='Flood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M347-286q-48 0-69.5-20T214-326q-31 0-50 13t-44 21q-5 2-9.5-1.5T106-303q0-7 4.5-12t10.5-7q23-9 39-20.5t54-11.5q21 0 39 5.5t50 24.5l-64-242-55 67q-4 5-9 6t-10-3q-5-4-5.5-9.5T163-516l217-268q12-15 31-20t37 2l322 123q5 2 7.5 7.5t.5 10.5q-2 5-7.5 7.5t-10.5.5l-80-31 88 331q20 1 36.5 12t35.5 19q6 2 10 7.5t4 11.5q0 5-4.5 8.5T840-293q-24-8-42.5-20.5T747-326q-43 0-63 20t-70 20q-49 0-70.5-20T480-326q-43 0-63 20t-70 20Zm0 101q43 0 63-20t70-20q49 0 70.5 20t63.5 20q43 0 63-20t70-20q38 0 53.5 11.5T839-193q6 2 10.5 7.5T854-173q0 6-4.5 9t-9.5 1q-25-8-43-21t-50-13q-42 0-63 20t-70 20q-49 0-70.5-20T480-197q-43 0-63 20t-70 20q-50 0-70-20t-63-20q-32 0-50 13t-43 21q-5 2-10-1.5t-5-9.5q0-7 4.5-12t10.5-7q23-9 39-20.5t54-11.5q50 0 70 20t63 20Zm278-130-59-224q-2-6-7-9t-11-1l-126 33q-6 2-9.5 7.5T411-497l40 146q7-2 14-2.5t15-.5q51 0 76 22t69 17Z"/>
    </Icon>
  );
});

IconMaterialFloodW100Filled.displayName = 'OnesyIconMaterialFloodW100Filled';

export default IconMaterialFloodW100Filled;
