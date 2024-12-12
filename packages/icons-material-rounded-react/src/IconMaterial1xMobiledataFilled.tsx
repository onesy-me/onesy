import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataFilled'

      short_name='1xMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-600h-40q-17 0-28.5-11.5T160-640q0-17 11.5-28.5T200-680h80q17 0 28.5 11.5T320-640v320q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-280Zm346 186-69 115q-5 9-13.5 14t-19.5 5q-23 0-34.5-20t.5-40l90-152-77-127q-12-20-.5-40.5T497-680q11 0 20.5 5.5T532-660l54 90 56-91q5-9 14-14t20-5q23 0 34.5 20t-.5 40l-76 128 90 151q12 20 .5 40.5T689-280q-11 0-20.5-5.5T654-300l-68-114Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataFilled.displayName = 'OnesyIconMaterial1xMobiledataFilled';

export default IconMaterial1xMobiledataFilled;
