import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFanIndirectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FanIndirectW100Filled'

      short_name='FanIndirect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-132-100-98 20-20 66 64v-264h28v264l66-64 20 20-100 98ZM192-234 92-332l100-98 20 19-67 65h167v-217h28v245H145l67 64-20 20Zm576 0-19-20 66-64H620v-245h28v217h167l-66-65 19-19 100 98-100 98ZM132-535v-253h696v253l-28-28v-197H160v197l-28 28Z"/>
    </Icon>
  );
});

IconMaterialFanIndirectW100Filled.displayName = 'OnesyIconMaterialFanIndirectW100Filled';

export default IconMaterialFanIndirectW100Filled;
