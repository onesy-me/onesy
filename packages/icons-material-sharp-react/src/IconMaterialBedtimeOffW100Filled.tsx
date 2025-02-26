import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffW100Filled'

      short_name='BedtimeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-271 272-767q27-33 62-59t77-43q0 92 31.5 178.5T539-539q65 65 149 99t176 34q-17 41-40.5 75T768-271Zm10 162L672-215q-30 11-62 17t-66 6q-73 0-137-27.5T295-295q-48-48-75.5-112T192-544q0-33 6.5-65t17.5-62L110-777l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffW100Filled.displayName = 'OnesyIconMaterialBedtimeOffW100Filled';

export default IconMaterialBedtimeOffW100Filled;
