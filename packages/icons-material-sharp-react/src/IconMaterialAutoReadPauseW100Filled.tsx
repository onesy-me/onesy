import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseW100Filled'

      short_name='AutoReadPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-426h28v-268h-28v268Zm128 0h28v-268h-28v268ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseW100Filled.displayName = 'OnesyIconMaterialAutoReadPauseW100Filled';

export default IconMaterialAutoReadPauseW100Filled;
