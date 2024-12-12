import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayW100Filled'

      short_name='AutoReadPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-448 168-112-168-112v224ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayW100Filled.displayName = 'OnesyIconMaterialAutoReadPlayW100Filled';

export default IconMaterialAutoReadPlayW100Filled;
