import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaW100Filled'

      short_name='Panorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm186-108h332L548-456 448-332l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialPanoramaW100Filled.displayName = 'OnesyIconMaterialPanoramaW100Filled';

export default IconMaterialPanoramaW100Filled;
