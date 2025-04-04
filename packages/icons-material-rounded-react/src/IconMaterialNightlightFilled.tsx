import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightFilled'

      short_name='Nightlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80q-83 0-156-31.5T277-197q-54-54-85.5-127T160-480q0-83 31.5-156T277-763q54-54 127-85.5T560-880q35 0 70 7t67 21q12 5 18 15.5t6 21.5q0 9-3.5 17T706-784q-70 55-108 135t-38 169q0 90 37 170t108 134q8 6 11.5 14.5T720-144q0 11-6 21.5T696-107q-32 14-66.5 20.5T560-80Z"/>
    </Icon>
  );
});

IconMaterialNightlightFilled.displayName = 'OnesyIconMaterialNightlightFilled';

export default IconMaterialNightlightFilled;
