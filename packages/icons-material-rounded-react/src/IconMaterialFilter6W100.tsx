import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6W100'

      short_name='Filter6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-386h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H468v-100q0-14 9-23t23-9h74q6 0 10-4t4-10q0-6-4-10t-10-4h-74q-26 0-43 17t-17 43v228q0 26 17 43t43 17Zm-32-160h100q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-12 0-22-9t-10-23v-100ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilter6W100.displayName = 'OnesyIconMaterialFilter6W100';

export default IconMaterialFilter6W100;
