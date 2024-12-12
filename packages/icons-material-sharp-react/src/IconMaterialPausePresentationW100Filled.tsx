import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationW100Filled'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-346h28v-268h-28v268Zm128 0h28v-268h-28v268ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationW100Filled.displayName = 'OnesyIconMaterialPausePresentationW100Filled';

export default IconMaterialPausePresentationW100Filled;
