import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hardware'

      short_name='Hardware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120q-17 0-28.5-11.5T360-160v-480H208q-19 0-31-14t-8-33q13-68 67.5-110.5T360-840h200q17 0 28.5 11.5T600-800v80l102-102q8-8 19.5-13t23.5-5h15q17 0 28.5 11.5T800-800v240q0 17-11.5 28.5T760-520h-15q-12 0-23.5-5T702-538L600-640v480q0 17-11.5 28.5T560-120H400Zm40-80h80v-240h-80v240Zm0-320h80v-240H360q-26 0-49 10.5T271-720h169v200Zm40 40Z"/>
    </Icon>
  );
});

IconMaterialHardware.displayName = 'OnesyIconMaterialHardware';

export default IconMaterialHardware;
