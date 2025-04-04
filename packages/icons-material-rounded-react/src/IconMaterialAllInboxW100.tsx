import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-320h416q12 0 22-10t10-22v-108H650q-11 38-43.5 59T534-380q-40 0-72.5-21T418-460H294v108q0 12 10 22t22 10Zm208-88q30 0 55-14.5t32-42.5q2-10 10-16.5t19-6.5h124v-280q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v280h124q11 0 19 6t10 16q8 28 32.5 43t54.5 15ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm108-136h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100.displayName = 'OnesyIconMaterialAllInboxW100';

export default IconMaterialAllInboxW100;
