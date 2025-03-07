import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTamperDetectionOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOn'

      short_name='TamperDetectionOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h40v-480H160v80q0 17-11.5 28.5T120-720q-17 0-28.5-11.5T80-760v-80q0-33 23.5-56.5T160-920h480q33 0 56.5 23.5T720-840v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-540v180q0 33-23.5 56.5T640-280h-40ZM178-160q-17 0-31.5-6.5T121-184L14-290q-6-6-6-14t6-14q9-9 20-13.5t22-4.5q12 0 23 4.5T98-318l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-590v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-650v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-610v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-570v330q0 33-23 56.5T400-160H178Zm462-680v480-480Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOn.displayName = 'OnesyIconMaterialTamperDetectionOn';

export default IconMaterialTamperDetectionOn;
