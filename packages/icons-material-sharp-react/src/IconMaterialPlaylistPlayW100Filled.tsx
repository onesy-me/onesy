import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayW100Filled'

      short_name='PlaylistPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-28h269v28H172Zm0-160v-28h426v28H172Zm0-160v-28h426v28H172Zm491 480v-213l166 107-166 106Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayW100Filled.displayName = 'OnesyIconMaterialPlaylistPlayW100Filled';

export default IconMaterialPlaylistPlayW100Filled;
