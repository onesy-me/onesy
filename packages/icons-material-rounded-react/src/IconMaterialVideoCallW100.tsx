import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-466v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h106q6 0 10-4t4-10q0-6-4-10t-10-4H439v-106q0-6-4-10t-10-4q-6 0-10 4t-4 10v106H305q-6 0-10 4t-4 10q0 6 4 10t10 4h106ZM217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100.displayName = 'OnesyIconMaterialVideoCallW100';

export default IconMaterialVideoCallW100;
