import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7Filled'

      short_name='Brightness7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialBrightness7Filled.displayName = 'OnesyIconMaterialBrightness7Filled';

export default IconMaterialBrightness7Filled;
