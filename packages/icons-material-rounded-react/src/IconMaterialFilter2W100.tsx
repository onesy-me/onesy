import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2W100'

      short_name='Filter2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M468-414v-100q0-14 9-23t23-9h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H454q-6 0-10 4t-4 10q0 6 4 10t10 4h114q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-26 0-43 17t-17 43v98q0 13 8.5 21.5T470-386h144q6 0 10-4t4-10q0-6-4-10t-10-4H468ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilter2W100.displayName = 'OnesyIconMaterialFilter2W100';

export default IconMaterialFilter2W100;
