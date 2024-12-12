import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100Filled'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h188v536H132Zm216 0v-536h480v536H348Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100Filled.displayName = 'OnesyIconMaterialThumbnailBarW100Filled';

export default IconMaterialThumbnailBarW100Filled;
