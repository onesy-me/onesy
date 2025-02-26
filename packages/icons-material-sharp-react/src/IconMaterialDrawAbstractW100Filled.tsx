import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawAbstractW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawAbstractW100Filled'

      short_name='DrawAbstract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M405-327q-14 15-35 17t-41-1q-15-3-27.5-3T279-304q-10 10-10.5 23.5T271-251q3 20 1 41t-16 37q-14 15-34.5 16.5T181-158q-16-3-30-1t-31 19l-20-19q22-23 43.5-26t41.5 0q16 3 28.5 3t22.5-10q11-11 11-24.5t-3-29.5q-3-20-1.5-41.5T258-324q14-15 34.5-17t40.5 1q16 3 28.5 3.5T384-346q11-11 11-24.5t-3-29.5q-3-20-1.5-41.5T406-478q14-15 34.5-16.5T481-493q16 3 28.5 3t22.5-10q11-11 11-24.5t-3-29.5q-3-20-1-41.5t16-36.5q14-15 34.5-16.5T630-647q16 3 28.5 3t22.5-10q11-11 11-24.5t-3-29.5q-3-20-1-41t16-37q14-15 34.5-16.5T779-801q16 3 30 1t31-19l20 19q-22 23-43.5 26t-41.5 0q-16-3-28.5-3T724-767q-11 11-11 24.5t3 29.5q3 20 1 41.5T701-635q-14 15-34.5 16.5T626-620q-16-3-28-3t-22 10q-11 11-11.5 24.5T567-559q3 20 2 41.5T554-481q-15 15-35.5 16.5T478-466q-15-3-28-2t-22 10q-10 10-11 23.5t2 29.5q3 20 1.5 41.5T405-327ZM240-572q-61 0-104.5-43.5T92-720q0-62 43.5-105T240-868q62 0 105 43t43 105q0 61-43 104.5T240-572ZM612-92v-256h256v256H612Z"/>
    </Icon>
  );
});

IconMaterialDrawAbstractW100Filled.displayName = 'OnesyIconMaterialDrawAbstractW100Filled';

export default IconMaterialDrawAbstractW100Filled;
