import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraW100Filled'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M647-654q11 0 18.5-7.5T673-680q0-11-7.5-18.5T647-706q-11 0-18.5 7.5T621-680q0 11 7.5 18.5T647-654ZM494-200h274q12 0 22-10t10-22v-496q0-12-10-22t-22-10H494v560Zm-302 28q-26 0-43-17t-17-43v-204q0-13 8.5-21.5T162-466h149l-81 81q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4l92-92q9-9 9-21t-9-21l-93-93q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l80 81H162q-13 0-21.5-8.5T132-524v-204q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialRearCameraW100Filled.displayName = 'OnesyIconMaterialRearCameraW100Filled';

export default IconMaterialRearCameraW100Filled;
