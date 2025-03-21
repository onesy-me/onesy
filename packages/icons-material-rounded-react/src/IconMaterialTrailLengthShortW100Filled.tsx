import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthShortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortW100Filled'

      short_name='TrailLengthShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-306q-69 0-118-45.5T426-466H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h226q3-35 22.5-71.5T505-626H280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q72.21 0 123.1 50.85 50.9 50.85 50.9 123T723.1-357q-50.89 51-123.1 51Zm-280 0q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h40q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-40Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortW100Filled.displayName = 'OnesyIconMaterialTrailLengthShortW100Filled';

export default IconMaterialTrailLengthShortW100Filled;
