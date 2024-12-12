import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpW100Filled'

      short_name='MoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-344v-362H372v-28h362v390h-28ZM506-144v-362H172v-28h362v390h-28Z"/>
    </Icon>
  );
});

IconMaterialMoreUpW100Filled.displayName = 'OnesyIconMaterialMoreUpW100Filled';

export default IconMaterialMoreUpW100Filled;
