import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveW100'

      short_name='PlaylistRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m581-116-20-20 104-104-104-104 20-20 104 104 104-104 20 20-104 104 104 104-20 20-104-104-104 104ZM151-346v-28h280v28H151Zm0-160v-28h440v28H151Zm0-160v-28h440v28H151Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveW100.displayName = 'OnesyIconMaterialPlaylistRemoveW100';

export default IconMaterialPlaylistRemoveW100;
