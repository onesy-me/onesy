import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterCenterFocusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusW100Filled'

      short_name='FilterCenterFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28ZM480-412q-29 0-48.5-19.5T412-480q0-29 19.5-48.5T480-548q29 0 48.5 19.5T548-480q0 29-19.5 48.5T480-412Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusW100Filled.displayName = 'OnesyIconMaterialFilterCenterFocusW100Filled';

export default IconMaterialFilterCenterFocusW100Filled;
