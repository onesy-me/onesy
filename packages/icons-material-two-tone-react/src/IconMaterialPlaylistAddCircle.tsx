import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircle'

      short_name='PlaylistAddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M7,7h7v2H7V7z M10,15H7v-2h3V15z M7,12v-2h7v2 H7z M17,15v2h-2v-2h-2v-2h2v-2h2v2h2v2H17z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M14,10H7v2h7V10z M14,7H7v2h7V7z M7,15h3v-2H7V15z M19,13v2h-2v2h-2v-2h-2v-2h2v-2h2v2H19z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircle.displayName = 'OnesyIconMaterialPlaylistAddCircle';

export default IconMaterialPlaylistAddCircle;
