import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudSyncW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncW100Filled'

      short_name='CloudSync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-476q0 62.94 27 115.97T342-242v-114q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v132q0 12.75-8.62 21.37Q352.75-194 340-194H208q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h114q-78-68-107-128t-29-125.53q0-86.47 45-157.97T348-742q6-3 12.5-2t8.5 7q2 6-1 11.5t-8 8.5q-66 33-106 98t-40 143Zm386 290q-38 0-66-28t-28-66q0-37.74 25.5-64.87Q557-372 601-374q14-35 44.5-57.5T720-454q48 0 83.5 32t40.5 88h16q31 0 52.5 21t21.5 51.61q0 31.35-21.46 53.37Q891.08-186 860-186H600Zm18-531v113q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-132q0-12.75 8.63-21.38Q607.25-766 620-766h132q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H638q63 55 89.5 98.5T765-554q2 5-1.5 10t-8.5 7q-5 2-9.5-1.26-4.5-3.25-6.5-8.74-11-42-36-79t-85-91Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncW100Filled.displayName = 'OnesyIconMaterialCloudSyncW100Filled';

export default IconMaterialCloudSyncW100Filled;
