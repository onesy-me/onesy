import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackW100'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-172q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-528q0-26 17-43t43-17h336q26 0 43 17t17 43v528h66q6 0 10 4t4 10q0 6-4 10t-10 4H186Zm94-28h400v-528q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v528Zm108-252q11 0 19.5-8.5T416-480q0-11-8.5-19.5T388-508q-11 0-19.5 8.5T360-480q0 11 8.5 19.5T388-452ZM280-760v560-560Z"/>
    </Icon>
  );
});

IconMaterialDoorBackW100.displayName = 'OnesyIconMaterialDoorBackW100';

export default IconMaterialDoorBackW100;
