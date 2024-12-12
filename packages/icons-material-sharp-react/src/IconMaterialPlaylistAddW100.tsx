import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddW100'

      short_name='PlaylistAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-346v-28h280v28H146Zm0-160v-28h440v28H146Zm0-160v-28h440v28H146Zm520 480v-160H506v-28h160v-160h28v160h160v28H694v160h-28Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddW100.displayName = 'OnesyIconMaterialPlaylistAddW100';

export default IconMaterialPlaylistAddW100;
