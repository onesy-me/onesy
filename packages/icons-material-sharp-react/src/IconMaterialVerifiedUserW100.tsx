import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedUserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserW100'

      short_name='VerifiedUser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-374 190-190-20-20-170 170-86-86-20 20 106 106Zm42 240q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserW100.displayName = 'OnesyIconMaterialVerifiedUserW100';

export default IconMaterialVerifiedUserW100;
