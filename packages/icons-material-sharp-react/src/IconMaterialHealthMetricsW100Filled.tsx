import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100Filled'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-140v-192H140v-134h212l75 112h26l71-215 69 103h227v134H628v192H332Zm104-251-69-103H140v-134h192v-192h296v192h192v134H607l-74-112h-26l-71 215Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100Filled.displayName = 'OnesyIconMaterialHealthMetricsW100Filled';

export default IconMaterialHealthMetricsW100Filled;
