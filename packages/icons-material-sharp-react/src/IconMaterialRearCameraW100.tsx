import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRearCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraW100'

      short_name='RearCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-357 123-123-123-123-19 19 90 90H132v28h179l-90 90 19 19Zm406.96-297q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5ZM494-200h306v-560H494v560Zm-362 28v-194h28v166h306v-560H160v166h-28v-194h696v616H132Zm334-28v-560 560Z"/>
    </Icon>
  );
});

IconMaterialRearCameraW100.displayName = 'OnesyIconMaterialRearCameraW100';

export default IconMaterialRearCameraW100;
