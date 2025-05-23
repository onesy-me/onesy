import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2Filled'

      short_name='Brightness2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-880q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880Z"/>
    </Icon>
  );
});

IconMaterialBrightness2Filled.displayName = 'OnesyIconMaterialBrightness2Filled';

export default IconMaterialBrightness2Filled;
