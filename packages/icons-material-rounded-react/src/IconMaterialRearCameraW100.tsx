import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraW100'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m250-367 92-92q9-9 9-21t-9-21l-93-93q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l80 81H146q-6 0-10 4t-4 10q0 6 4 10t10 4h165l-81 81q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4Zm397-287q11 0 18.5-7.5T673-680q0-11-7.5-18.5T647-706q-11 0-18.5 7.5T621-680q0 11 7.5 18.5T647-654ZM494-200h274q12 0 22-10t10-22v-496q0-12-10-22t-22-10H494v560Zm-302 28q-26 0-43-17t-17-43v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 12 10 22t22 10h274v-560H192q-12 0-22 10t-10 22v120q0 6-4 10t-10 4q-6 0-10-4t-4-10v-120q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm274-556v-32 560-528Z"/>
    </Icon>
  );
});

IconMaterialRearCameraW100.displayName = 'OnesyIconMaterialRearCameraW100';

export default IconMaterialRearCameraW100;
