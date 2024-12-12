import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddFilled'

      short_name='PlaylistAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-320v-80h280v80H120Zm0-160v-80h440v80H120Zm0-160v-80h440v80H120Zm520 480v-160H480v-80h160v-160h80v160h160v80H720v160h-80Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddFilled.displayName = 'OnesyIconMaterialPlaylistAddFilled';

export default IconMaterialPlaylistAddFilled;
