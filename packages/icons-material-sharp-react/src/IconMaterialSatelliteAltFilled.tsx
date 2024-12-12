import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteAltFilled'

      short_name='SatelliteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-32v-80q117 0 198.5-81.5T840-392h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T560-32Zm0-160v-80q50 0 85-35t35-85h80q0 83-58.5 141.5T560-192Zm-69-101L384-399l-28 28 107 106L222-24-34-279l242-241 106 107 28-28-106-106 170-170 106 107 28-28-106-107 240-240 255 255-240 240-107-106-28 28 106 106-169 169ZM80-278l142 142 42-42-142-142-42 42Zm227 57 42-42-142-142-42 42 142 142Zm240-524 142 142 42-42-142-142-42 42Zm227 57 42-42-142-142-42 42 142 142Z"/>
    </Icon>
  );
});

IconMaterialSatelliteAltFilled.displayName = 'OnesyIconMaterialSatelliteAltFilled';

export default IconMaterialSatelliteAltFilled;
