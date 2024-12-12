import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationW100Filled'

      short_name='Vibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M76-386v-188h28v188H76Zm108 80v-348h28v348h-28Zm672-80v-188h28v188h-28Zm-108 80v-348h28v348h-28ZM292-172v-616h376v616H292Z"/>
    </Icon>
  );
});

IconMaterialVibrationW100Filled.displayName = 'OnesyIconMaterialVibrationW100Filled';

export default IconMaterialVibrationW100Filled;
