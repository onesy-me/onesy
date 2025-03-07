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
      <path d="M586-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q238-407.65 238-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q513.79-828 586-828q12.67 0 25.33.5Q624-827 636-825q11 2 16.5 10.53T658-797q0 5.04-2 9.52-2 4.48-6 9.48-55 63-85.5 139T534-480.46Q534-397 564-320q30 77 86 139 4 4 5.5 8.58 1.5 4.57 1.5 9.42 0 8.94-5 17.47T636-135q-12 2-24.61 2.5-12.6.5-25.39.5Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100Filled.displayName = 'OnesyIconMaterialNightlightW100Filled';

export default IconMaterialNightlightW100Filled;
