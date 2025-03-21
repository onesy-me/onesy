import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43.33v-255.34Q132-634 149-651t43-17h576q26 0 43 17t17 43.33v255.34Q828-326 811-309t-43 17H192Zm0-28h576q12 0 22-10t10-22v-256q0-12-10-22t-22-10H654v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106H494v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106H334v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106H192q-12 0-22 10t-10 22v256q0 12 10 22t22 10Zm128-200Zm160 0Zm160 0Zm-160 40Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100.displayName = 'OnesyIconMaterialStraightenW100';

export default IconMaterialStraightenW100;
