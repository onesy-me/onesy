import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoFilled'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-320h64l32-92h146l32 92h62L512-680h-64L312-320Zm114-144 52-150h4l52 150H426Zm54 436L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoFilled.displayName = 'OnesyIconMaterialBrightnessAutoFilled';

export default IconMaterialBrightnessAutoFilled;
