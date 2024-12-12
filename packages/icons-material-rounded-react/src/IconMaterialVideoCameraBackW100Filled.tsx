import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackW100Filled'

      short_name='VideoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M289-334h272q9 0 13-8t-1-16l-72-97q-2-3-5.5-4.5T489-461q-3 0-6.5 1.5T477-455l-77 95q-2 3-5 4.5t-6 1.5q-3 0-6.5-1.5T377-360l-40-46q-2-3-5.5-4t-6.5-1q-3 0-6 1.5t-5 4.5l-36 47q-6 8-2 16t13 8Zm-72 122q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackW100Filled.displayName = 'OnesyIconMaterialVideoCameraBackW100Filled';

export default IconMaterialVideoCameraBackW100Filled;
