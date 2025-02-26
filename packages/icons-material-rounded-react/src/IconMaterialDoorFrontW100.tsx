import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontW100'

      short_name='DoorFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-172q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-528q0-26 17-43t43-17h336q26 0 43 17t17 43v528h66q6 0 10 4t4 10q0 6-4 10t-10 4H186Zm94-28h400v-528q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v528Zm292-252q11 0 19.5-8.5T600-480q0-11-8.5-19.5T572-508q-11 0-19.5 8.5T544-480q0 11 8.5 19.5T572-452ZM280-760v560-560Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontW100.displayName = 'OnesyIconMaterialDoorFrontW100';

export default IconMaterialDoorFrontW100;
