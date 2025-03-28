import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100Filled'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M816-104 678-242l-70 70H352L172-352v-256l70-70-138-138 20-20 712 712-20 20Zm-60-212L494-578v-82h-28v54L318-754l34-34h256l180 180v256l-32 36Zm-276 6q9 0 14.5-6t5.5-14q0-4-1.5-7.5T494-344q-3-3-6.5-4.5T480-350q-9 0-14.5 6t-5.5 14q0 8 5.5 14t14.5 6Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100Filled.displayName = 'OnesyIconMaterialReportOffW100Filled';

export default IconMaterialReportOffW100Filled;
