import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveW100Filled'

      short_name='DriveFileMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm358-214-70 70q-4 4-4.5 9.5T480-336q5 5 10 5t10-5l83-83q9-9 9-21t-9-21l-83-83q-4-4-9.5-4.5T480-544q-5 5-5 10t5 10l70 70H370q-6 0-10 4t-4 10q0 6 4 10t10 4h180Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveW100Filled.displayName = 'OnesyIconMaterialDriveFileMoveW100Filled';

export default IconMaterialDriveFileMoveW100Filled;
