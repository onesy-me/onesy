import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterW100'

      short_name='Filter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m498-428-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilterW100.displayName = 'OnesyIconMaterialFilterW100';

export default IconMaterialFilterW100;
