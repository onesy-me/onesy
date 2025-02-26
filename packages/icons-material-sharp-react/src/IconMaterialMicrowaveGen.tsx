import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGen'

      short_name='MicrowaveGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm40-40h400v-400H200v400Zm80-80v-240h240v240H280Zm400-240h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm-520 40v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGen.displayName = 'OnesyIconMaterialMicrowaveGen';

export default IconMaterialMicrowaveGen;
