import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefaultW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100Filled'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm164-145 144-144 144 144 19-19-144-144 144-144-19-19-144 144-144-144-19 19 144 144-144 144 19 19Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100Filled.displayName = 'OnesyIconMaterialDisabledByDefaultW100Filled';

export default IconMaterialDisabledByDefaultW100Filled;
