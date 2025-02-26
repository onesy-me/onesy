import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlert'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 412L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlert.displayName = 'OnesyIconMaterialBrightnessAlert';

export default IconMaterialBrightnessAlert;
