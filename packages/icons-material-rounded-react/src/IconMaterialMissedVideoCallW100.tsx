import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M455-369q6 0 11-2t10-7l113-114q4-4 4.5-9.5T589-512q-5-5-10-5t-10 5L455-396 303-548h86q6 0 10-4t4-10q0-6-4-10t-10-4H285q-13 0-21.5 8.5T255-546v104q0 6 4 10t10 4q6 0 10-4t4-10v-86l151 151q5 5 10 6.5t11 1.5ZM217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100.displayName = 'OnesyIconMaterialMissedVideoCallW100';

export default IconMaterialMissedVideoCallW100;
