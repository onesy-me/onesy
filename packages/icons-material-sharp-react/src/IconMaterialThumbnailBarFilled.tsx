import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarFilled'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h240v640H80Zm320 0v-640h480v640H400Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarFilled.displayName = 'OnesyIconMaterialThumbnailBarFilled';

export default IconMaterialThumbnailBarFilled;
