import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaHorizontal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontal'

      short_name='PanoramaHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-254q78-23 158.5-34.5T480-300q81 0 161.5 11.5T800-254v-451q-78 23-158.5 34T480-660q-81 0-161.5-11T160-705v451ZM81-140v-681q75 35 180 58t220 23q115 0 220-23t180-58v681q-75-35-180-57.5T481-220q-115 0-220 22.5T81-140Zm399-340Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontal.displayName = 'OnesyIconMaterialPanoramaHorizontal';

export default IconMaterialPanoramaHorizontal;
