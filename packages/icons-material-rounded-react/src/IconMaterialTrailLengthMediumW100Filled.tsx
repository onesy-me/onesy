import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumW100Filled'

      short_name='TrailLengthMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h245q-35-23-55-57.5T466-466H240q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h226q3-36 22-71t57-61H320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q72.21 0 123.1 50.85 50.9 50.85 50.9 123T763.1-357q-50.89 51-123.1 51H300Zm-140 0q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h72q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-72Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthMediumW100Filled.displayName = 'OnesyIconMaterialTrailLengthMediumW100Filled';

export default IconMaterialTrailLengthMediumW100Filled;
