import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallLogW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogW100Filled'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M719-132q-103 0-207.5-48.5T318-318q-88-89-137-194.5T132-719v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM480-800v-28h348v28H480Zm0 128v-28h348v28H480Zm0 128v-28h348v28H480Z"/>
    </Icon>
  );
});

IconMaterialCallLogW100Filled.displayName = 'OnesyIconMaterialCallLogW100Filled';

export default IconMaterialCallLogW100Filled;
