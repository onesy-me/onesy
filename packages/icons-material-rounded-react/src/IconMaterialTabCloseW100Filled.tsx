import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseW100Filled'

      short_name='TabClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm242-283 74-74 75 75q4 4 9.5 3.5t9.5-4.5q4-4 4-9.5t-4-9.5l-75-74 75-75q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4l-75 75-75-75q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l74 75-75 75q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4Z"/>
    </Icon>
  );
});

IconMaterialTabCloseW100Filled.displayName = 'OnesyIconMaterialTabCloseW100Filled';

export default IconMaterialTabCloseW100Filled;
