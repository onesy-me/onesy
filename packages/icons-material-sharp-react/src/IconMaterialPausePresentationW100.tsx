import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationW100'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-346h28v-268h-28v268Zm128 0h28v-268h-28v268ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationW100.displayName = 'OnesyIconMaterialPausePresentationW100';

export default IconMaterialPausePresentationW100;
