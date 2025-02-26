import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraW100Filled'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M646.96-654q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5ZM494-200h306v-560H494v560Zm-362 28v-294h179l-90 90 19 19 123-123-123-123-19 19 90 90H132v-294h696v616H132Z"/>
    </Icon>
  );
});

IconMaterialRearCameraW100Filled.displayName = 'OnesyIconMaterialRearCameraW100Filled';

export default IconMaterialRearCameraW100Filled;
