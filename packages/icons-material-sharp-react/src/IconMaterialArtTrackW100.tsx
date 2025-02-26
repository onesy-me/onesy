import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtTrackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackW100'

      short_name='ArtTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M536-252H80v-456h456v456Zm-428-28h400v-400H108v400Zm572 28v-456h28v456h-28Zm172 0v-456h28v456h-28ZM172-372h272l-80-108-76 100-56-74-60 82Zm-64-308v400-400Z"/>
    </Icon>
  );
});

IconMaterialArtTrackW100.displayName = 'OnesyIconMaterialArtTrackW100';

export default IconMaterialArtTrackW100;
