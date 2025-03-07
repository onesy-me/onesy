import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightW100Filled'

      short_name='Nightlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-132q-72 0-135.5-27.5T340-234q-47-47-74.5-110.5T238-480q0-72 27.5-135.5T340-726q47-47 110.5-74.5T586-828q26 0 49.5 3t46.5 11q-68 62-108 148t-40 186q0 100 40 186t108 148q-23 8-46.5 11t-49.5 3Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100Filled.displayName = 'OnesyIconMaterialNightlightW100Filled';

export default IconMaterialNightlightW100Filled;
