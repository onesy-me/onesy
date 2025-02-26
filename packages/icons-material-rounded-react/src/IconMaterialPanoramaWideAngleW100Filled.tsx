import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaWideAngleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleW100Filled'

      short_name='PanoramaWideAngle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-212q-89 0-167.5-8.5T162-246q-16-57-23-115.5T132-480q0-60 7-118.5T162-714q72-17 150.5-25.5T480-748q89 0 167.5 8.5T798-714q16 57 23 115.5t7 118.5q0 60-7 118.5T798-246q-72 17-150.5 25.5T480-212Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleW100Filled.displayName = 'OnesyIconMaterialPanoramaWideAngleW100Filled';

export default IconMaterialPanoramaWideAngleW100Filled;
