import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassTopW100Filled'

      short_name='HourglassTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-160h340v-120q0-72-49-123t-121-51q-72 0-121 51t-49 123v120Zm-98 28v-28h70v-120q0-78 50.5-136.5T460-480q-77-6-127.5-64T282-680v-120h-70v-28h536v28h-70v120q0 78-50.5 136T500-480q77 5 127.5 63.5T678-280v120h70v28H212Z"/>
    </Icon>
  );
});

IconMaterialHourglassTopW100Filled.displayName = 'OnesyIconMaterialHourglassTopW100Filled';

export default IconMaterialHourglassTopW100Filled;
