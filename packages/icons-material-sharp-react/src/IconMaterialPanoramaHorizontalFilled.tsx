import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaHorizontalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalFilled'

      short_name='PanoramaHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M81-140v-681q75 35 180 58t220 23q115 0 220-23t180-58v681q-75-35-180-57.5T481-220q-115 0-220 22.5T81-140Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalFilled.displayName = 'OnesyIconMaterialPanoramaHorizontalFilled';

export default IconMaterialPanoramaHorizontalFilled;
