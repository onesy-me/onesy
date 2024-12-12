import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaHorizontalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100'

      short_name='PanoramaHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-254q78-23 158.5-34.47Q399-299.94 480-299.94t161.5 11.47Q722-277 800-254v-450q-78 23-158.5 33.5T480-660q-81 0-161.5-10.5T160-704v450Zm-28 36v-522q81 23 161.5 38.5T480-686q106 0 186.5-15.5T828-740v522q-81-23-161.5-37.5T480-270q-106 0-186.5 14.5T132-218Zm348-261Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100.displayName = 'OnesyIconMaterialPanoramaHorizontalW100';

export default IconMaterialPanoramaHorizontalW100;
