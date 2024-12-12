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
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160v640H160Zm240 0v-640h400q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H400Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarFilled.displayName = 'OnesyIconMaterialThumbnailBarFilled';

export default IconMaterialThumbnailBarFilled;
