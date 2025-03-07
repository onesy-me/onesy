import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCheckCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckCircle'

      short_name='PlaylistAddCheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8c4.41,0,8-3.59,8-8S16.41,4,12,4z M7,7h7v2H7V7z M7,10h7v2H7V10z M10,15 H7v-2h3V15z M14.05,18.36l-2.83-2.83l1.41-1.41l1.41,1.41L17.59,12L19,13.41L14.05,18.36z" opacity=".3"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2z M14,10H7v2h7V10z M14,7H7v2h7V7z M7,15h3v-2H7V15z M19,13.41L17.59,12l-3.54,3.54 l-1.41-1.41l-1.41,1.41l2.83,2.83L19,13.41z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckCircle.displayName = 'OnesyIconMaterialPlaylistAddCheckCircle';

export default IconMaterialPlaylistAddCheckCircle;
