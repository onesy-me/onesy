import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataW100Filled'

      short_name='GMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-300q-26 0-43-17t-17-43v-240q0-26 17-43t43-17h218q6 0 10 4t4 10q0 6-4 10t-10 4H366q-14 0-23 9t-9 23v240q0 14 9 23t23 9h188q14 0 23-9t9-23v-106h-86q-6 0-10-4t-4-10q0-6 4-10t10-4h100q6 0 10 4t4 10v120q0 26-17 43t-43 17H366Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataW100Filled.displayName = 'OnesyIconMaterialGMobiledataW100Filled';

export default IconMaterialGMobiledataW100Filled;
