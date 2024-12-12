import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPoliceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceW100Filled'

      short_name='LocalPolice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-388 74-58 72 56-28-90 78-60h-92l-30-92-30 92h-92l76 60-28 92Zm74 254q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceW100Filled.displayName = 'OnesyIconMaterialLocalPoliceW100Filled';

export default IconMaterialLocalPoliceW100Filled;
