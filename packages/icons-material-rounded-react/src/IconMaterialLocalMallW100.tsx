import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalMallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallW100'

      short_name='LocalMall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-25 0-42.5-17.5T172-192v-416q0-25 17.5-42.5T232-668h100q0-62 43-105t105-43q62 0 105 43t43 105h100q25 0 42.5 17.5T788-608v416q0 25-17.5 42.5T728-132H232Zm0-28h496q12 0 22-10t10-22v-416q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm128-508h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Zm280-292q58 0 102.5-41t44.5-95q0-5-4-8.5t-10-3.5q-5 0-9 4.5t-5 9.5q-5 45-39 75.5T480-480q-46 0-80-30.5T361-586q-1-5-5-9.5t-9-4.5q-6 0-10 3.5t-4 8.5q0 54 44.5 95T480-452Z"/>
    </Icon>
  );
});

IconMaterialLocalMallW100.displayName = 'OnesyIconMaterialLocalMallW100';

export default IconMaterialLocalMallW100;
