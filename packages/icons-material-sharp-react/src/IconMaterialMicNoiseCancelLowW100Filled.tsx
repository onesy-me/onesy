import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicNoiseCancelLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelLowW100Filled'

      short_name='MicNoiseCancelLow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 884V268h28v616h-28Zm-205-72-19-19q44-43 67-99.5T332 576q0-61-23-117.5T242 359l19-20q48 48 73 108.5T359 575q0 67-25 128t-73 109Zm-91-91-20-21q26-25 39-57.5t13-67.5q0-35-13-67t-39-57l20-21q29 29 45 66t16 79q0 42-16 79.5T170 721Zm430-131v-28h188v28H600Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelLowW100Filled.displayName = 'OnesyIconMaterialMicNoiseCancelLowW100Filled';

export default IconMaterialMicNoiseCancelLowW100Filled;
