import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedUserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserW100Filled'

      short_name='VerifiedUser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-374 190-190-20-20-170 170-86-86-20 20 106 106Zm42 240q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserW100Filled.displayName = 'OnesyIconMaterialVerifiedUserW100Filled';

export default IconMaterialVerifiedUserW100Filled;
