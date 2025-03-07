import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaWideAngleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleW100'

      short_name='PanoramaWideAngle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-212q-89 0-167.5-8.5T162-246q-16-57-23-115.5T132-480q0-60 7-118.5T162-714q72-17 150.5-25.5T480-748q89 0 167.5 8.5T798-714q16 57 23 115.5t7 118.5q0 60-7 118.5T798-246q-72 17-150.5 25.5T480-212Zm0-268Zm0 240q83 0 156-7.5T776-270q13-52 18.5-104t5.5-106q0-54-5.5-106T776-690q-67-15-140-22.5T480-720q-83 0-156 7.5T184-690q-13 52-18.5 104T160-480q0 54 5.5 106T184-270q67 15 140 22.5t156 7.5Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleW100.displayName = 'OnesyIconMaterialPanoramaWideAngleW100';

export default IconMaterialPanoramaWideAngleW100;
