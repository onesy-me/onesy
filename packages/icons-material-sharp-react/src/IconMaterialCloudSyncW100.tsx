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
      <path d="M194-194v-28h128q-78-68-107-128t-29-126q0-94 52.5-170T374-754v30q-72 31-116 99t-44 149q0 63 27 116t101 118v-128h28v176H194Zm406 8q-38 0-66-28t-28-66q0-38 25.5-65t69.5-29q14-35 44.5-57.5T720-454q48 0 83.5 32t40.5 88h16q31 0 52.5 21t21.5 52q0 31-21.5 53T860-186H600Zm142-348q-11-47-35.5-86T618-717v127h-28v-176h176v28H638q70 62 96 109t36 95h-28ZM600-214h260q19 0 32.5-13.5T906-260q0-19-13.5-32.5T860-306h-44v-24q0-40-28-68t-68-28q-40 0-66.5 23.5T625-346h-25q-27 0-46.5 19.5T534-280q0 27 19.5 46.5T600-214Zm120-106Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncW100.displayName = 'OnesyIconMaterialCloudSyncW100';

export default IconMaterialCloudSyncW100;
