import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalMallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallW100Filled'

      short_name='LocalMall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h100q0-62 43-105t105-43q62 0 105 43t43 105h100q26 0 43 17t17 43v416q0 26-17 43t-43 17H232Zm128-536h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Zm120 216q58 0 102.5-41t44.5-95q0-5-4-8.5t-10-3.5q-5 0-9 4.5t-5 9.5q-5 45-39 75.5T480-480q-46 0-80-30.5T361-586q-1-5-5-9.5t-9-4.5q-6 0-10 3.5t-4 8.5q0 54 44.5 95T480-452Z"/>
    </Icon>
  );
});

IconMaterialLocalMallW100Filled.displayName = 'OnesyIconMaterialLocalMallW100Filled';

export default IconMaterialLocalMallW100Filled;
