import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtTrackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackW100Filled'

      short_name='ArtTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M536-252H80v-456h456v456Zm144 0v-456h28v456h-28Zm172 0v-456h28v456h-28ZM172-372h272l-80-108-76 100-56-74-60 82Z"/>
    </Icon>
  );
});

IconMaterialArtTrackW100Filled.displayName = 'OnesyIconMaterialArtTrackW100Filled';

export default IconMaterialArtTrackW100Filled;
