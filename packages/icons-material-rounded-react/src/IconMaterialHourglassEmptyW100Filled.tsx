import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassEmptyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassEmptyW100Filled'

      short_name='HourglassEmpty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-160h340v-120q0-72-49-123t-121-51q-72 0-121 51.11-49 51.12-49 122.89v120Zm170-346q72 0 121-51.11T650-680v-120H310v120q0 72 49 123t121 51ZM226-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h56v-120q0-78 50.5-136.5T460-480q-77-6-127.5-64T282-680v-120h-56q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-56v120q0 78-50.5 136T500-480q77 5 127.5 63.5T678-280v120h56q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
});

IconMaterialHourglassEmptyW100Filled.displayName = 'OnesyIconMaterialHourglassEmptyW100Filled';

export default IconMaterialHourglassEmptyW100Filled;
