import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudSyncW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncW100'

      short_name='CloudSync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-476q0 63 27 116t101 118v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T340-194H208q-6 0-10-4t-4-10q0-6 4-10t10-4h114q-78-68-107-128t-29-126q0-86 45-157.5T348-742q6-3 12.5-2t8.5 7q2 6-1 11.5t-8 8.5q-66 33-106 98t-40 143Zm386 290q-38 0-66-28t-28-66q0-38 25.5-65t69.5-29q14-35 44.5-57.5T720-454q48 0 83.5 32t40.5 88h16q31 0 52.5 21t21.5 52q0 31-21.5 53T860-186H600Zm18-531v113q0 6-4 10t-10 4q-6 0-10-4t-4-10v-132q0-13 8.5-21.5T620-766h132q6 0 10 4t4 10q0 6-4 10t-10 4H638q63 55 89.5 98.5T765-554q2 5-1.5 10t-8.5 7q-5 2-9.5-1.5T739-547q-11-42-36-79t-85-91Zm-18 503h260q19 0 32.5-13.5T906-260q0-19-13.5-32.5T860-306h-44v-24q0-40-28-68t-68-28q-40 0-66.5 23.5T625-346h-25q-27 0-46.5 19.5T534-280q0 27 19.5 46.5T600-214Zm120-106Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncW100.displayName = 'OnesyIconMaterialCloudSyncW100';

export default IconMaterialCloudSyncW100;
