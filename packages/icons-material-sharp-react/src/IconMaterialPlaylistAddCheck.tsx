import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheck'

      short_name='PlaylistAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm534 440L512-342l56-56 86 84 170-170 56 58-226 226Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheck.displayName = 'OnesyIconMaterialPlaylistAddCheck';

export default IconMaterialPlaylistAddCheck;
