import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsFilled'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-200H80v-160h258l68 103h72l54-173 46 70h302v160H680v200H280Zm148-370-47-70H80v-160h200v-200h400v200h200v160H621l-68-102h-71l-54 172Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsFilled.displayName = 'OnesyIconMaterialHealthMetricsFilled';

export default IconMaterialHealthMetricsFilled;
