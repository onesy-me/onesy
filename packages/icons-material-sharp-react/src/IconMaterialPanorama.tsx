import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanorama = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Panorama'

      short_name='Panorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm80-80h480L570-520 450-360l-90-120-120 160Zm-80 80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPanorama.displayName = 'OnesyIconMaterialPanorama';

export default IconMaterialPanorama;
