import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlay'

      short_name='PlaylistPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlay.displayName = 'OnesyIconMaterialPlaylistPlay';

export default IconMaterialPlaylistPlay;
