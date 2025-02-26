import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIndeterminateCheckBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxW100Filled'

      short_name='IndeterminateCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-466h348v-28H306v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxW100Filled.displayName = 'OnesyIconMaterialIndeterminateCheckBoxW100Filled';

export default IconMaterialIndeterminateCheckBoxW100Filled;
