import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M781-112 561-332v200H345v-416L103-790l20-20 678 678-20 20Zm-408-48h160v-200L373-520v360Zm188-326-28-28v-30l80-120v-42H341l-28-28h300v-66H293v46l-28-28v-46h376v172l-80 120v50Zm-108 46Zm14-140Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100.displayName = 'OnesyIconMaterialFlashlightOffW100';

export default IconMaterialFlashlightOffW100;
