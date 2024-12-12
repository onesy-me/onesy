import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCinematicBlurW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CinematicBlurW100'

      short_name='CinematicBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-788 54 108h120l-54-108h80l54 108h120l-54-108h80l54 108h120l-54-108h116v616H132v-616h60Zm-32 136v452h640v-452H160Zm0 0v452-452Zm196 366h248v-2q0-28-35.5-47T480-354q-53 0-88.5 19T356-288v2Zm124-140q23 0 38.5-15.5T534-480q0-23-15.5-38.5T480-534q-23 0-38.5 15.5T426-480q0 23 15.5 38.5T480-426Z"/>
    </Icon>
  );
});

IconMaterialCinematicBlurW100.displayName = 'OnesyIconMaterialCinematicBlurW100';

export default IconMaterialCinematicBlurW100;
