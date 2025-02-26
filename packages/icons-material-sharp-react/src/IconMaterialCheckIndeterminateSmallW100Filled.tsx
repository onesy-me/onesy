import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckIndeterminateSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallW100Filled'

      short_name='CheckIndeterminateSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-466v-28h376v28H292Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallW100Filled.displayName = 'OnesyIconMaterialCheckIndeterminateSmallW100Filled';

export default IconMaterialCheckIndeterminateSmallW100Filled;
