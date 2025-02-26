import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100Filled'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360v-200h320v200H400ZM132-212v-536h696v536H132Zm28-28h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeW100Filled.displayName = 'OnesyIconMaterialIframeW100Filled';

export default IconMaterialIframeW100Filled;
