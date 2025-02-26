import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarW100Filled'

      short_name='Battery1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356.17-132q-13.17 0-21.67-8.63-8.5-8.62-8.5-21.37v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v583q0 12.75-8.62 21.37Q616.75-132 604-132H356.17ZM354-240h252v-508H354v508Z"/>
    </Icon>
  );
});

IconMaterialBattery1BarW100Filled.displayName = 'OnesyIconMaterialBattery1BarW100Filled';

export default IconMaterialBattery1BarW100Filled;
