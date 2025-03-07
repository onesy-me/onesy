import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCamping = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Camping'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-120q0-13 4-25t12-23l334-450-46-62q-5-7-7-14.5t-1-15q1-7.5 5-14.5t11-12q14-10 30-8t26 16l32 43 32-43q10-14 26-16t30 8q14 10 16 26t-8 30l-46 62 334 450q8 11 12 23t4 25v120q0 17-11.5 28.5T840-80H120q-17 0-28.5-11.5T80-120Zm400-551L160-240v80h120l167-234q12-17 33-17t33 17l167 234h120v-80L480-671ZM378-160h204L480-302 378-160Zm135-234 167 234-167-234q-12-17-33-17t-33 17L280-160l167-234q12-17 33-17t33 17Z"/>
    </Icon>
  );
});

IconMaterialCamping.displayName = 'OnesyIconMaterialCamping';

export default IconMaterialCamping;
