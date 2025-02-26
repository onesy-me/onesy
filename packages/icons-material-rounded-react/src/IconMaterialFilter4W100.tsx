import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4W100'

      short_name='Filter4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-546v146q0 6 4 10t10 4q6 0 10-4t4-10v-320q0-6-4-10t-10-4q-6 0-10 4t-4 10v146H468v-146q0-6-4-10t-10-4q-6 0-10 4t-4 10v144q0 13 8.5 21.5T470-546h130ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilter4W100.displayName = 'OnesyIconMaterialFilter4W100';

export default IconMaterialFilter4W100;
