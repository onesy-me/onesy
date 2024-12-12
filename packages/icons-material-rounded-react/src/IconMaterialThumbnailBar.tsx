import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBar'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm240-80h400v-480H400v480Zm-80 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h80-80Zm0-480h80-80Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBar.displayName = 'OnesyIconMaterialThumbnailBar';

export default IconMaterialThumbnailBar;
