import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3W100Filled'

      short_name='Looks3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306h188v-348H386v28h160v132H446v28h100v132H386v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLooks3W100Filled.displayName = 'OnesyIconMaterialLooks3W100Filled';

export default IconMaterialLooks3W100Filled;
