import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataW100'

      short_name='1xMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-626h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h80q5.95 0 9.98 4.03Q294-645.95 294-640v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-306Zm320 162-90 151q-1.79 3.32-4.82 5.16-3.04 1.84-6.97 1.84-8.21 0-12.21-7t0-14l98-165-85-140q-5-8-.56-15 4.44-7 13.31-7 4.25 0 7.42 1.92 3.16 1.93 4.83 5.08l78 127 76-127q1.75-3.32 4.91-5.16 3.16-1.84 7.02-1.84 8.07 0 12.07 7t0 14l-84 141 97 164q5 8 0 15t-13.14 7q-3.72 0-6.94-1.92-3.23-1.93-4.92-5.08l-90-151Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataW100.displayName = 'OnesyIconMaterial1xMobiledataW100';

export default IconMaterial1xMobiledataW100;
