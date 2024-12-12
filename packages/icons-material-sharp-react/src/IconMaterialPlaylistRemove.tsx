import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemove'

      short_name='PlaylistRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m576-80-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104L576-80ZM120-320v-80h280v80H120Zm0-160v-80h440v80H120Zm0-160v-80h440v80H120Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemove.displayName = 'OnesyIconMaterialPlaylistRemove';

export default IconMaterialPlaylistRemove;
