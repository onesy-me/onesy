import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposurePlus1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1W100Filled'

      short_name='ExposurePlus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-432H160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H294v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Zm394-236-93 64q-5 3-10.5 2.5t-8.66-5.67Q545-612 545.5-617.5t5.5-8.5l112-78 3-1.5q1-.5 2.78-.5h7.83q4.98 0 8.19 3.09 3.2 3.1 3.2 7.91v427q0 5.91-4.06 9.96-4.06 4.04-10 4.04t-9.94-4.04q-4-4.05-4-9.96v-400Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1W100Filled.displayName = 'OnesyIconMaterialExposurePlus1W100Filled';

export default IconMaterialExposurePlus1W100Filled;
