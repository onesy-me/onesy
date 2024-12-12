import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaFilled'

      short_name='Panorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm160-160h480L570-520 450-360l-90-120-120 160Z"/>
    </Icon>
  );
});

IconMaterialPanoramaFilled.displayName = 'OnesyIconMaterialPanoramaFilled';

export default IconMaterialPanoramaFilled;
