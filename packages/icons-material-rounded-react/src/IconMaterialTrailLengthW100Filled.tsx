import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthW100Filled'

      short_name='TrailLength'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h285q-40-27-58.5-62T506-466H368q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h138q4-37 22.5-72t56.5-60H160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h520q72.21 0 123.1 50.85 50.9 50.85 50.9 123T803.1-357q-50.89 51-123.1 51H300ZM120-466q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h180q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H120Zm40 160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h72q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-72Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthW100Filled.displayName = 'OnesyIconMaterialTrailLengthW100Filled';

export default IconMaterialTrailLengthW100Filled;
