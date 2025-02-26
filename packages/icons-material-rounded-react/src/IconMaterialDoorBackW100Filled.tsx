import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackW100Filled'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-528q0-26 17-43t43-17h336q26 0 43 17t17 43v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm202-280q11 0 19.5-8.5T416-480q0-11-8.5-19.5T388-508q-11 0-19.5 8.5T360-480q0 11 8.5 19.5T388-452Z"/>
    </Icon>
  );
});

IconMaterialDoorBackW100Filled.displayName = 'OnesyIconMaterialDoorBackW100Filled';

export default IconMaterialDoorBackW100Filled;
