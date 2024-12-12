import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtTrack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrack'

      short_name='ArtTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-200H40v-560h560v560Zm-480-80h400v-400H120v400Zm560 80v-560h80v560h-80Zm160 0v-560h80v560h-80ZM160-360h320L376-500l-76 100-56-74-84 114Zm-40-320v400-400Z"/>
    </Icon>
  );
});

IconMaterialArtTrack.displayName = 'OnesyIconMaterialArtTrack';

export default IconMaterialArtTrack;
