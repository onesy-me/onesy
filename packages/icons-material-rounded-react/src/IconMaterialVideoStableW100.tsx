import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm495-29 76-290q3-12-3-23t-18-14L312-712q-12-3-23 3t-14 18l-76 287q-3 12 3 23t18 14l430 119q12 3 23-3t14-18Zm-28-6L225-394l78-292 434 118-78 293Zm-499 35v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100.displayName = 'OnesyIconMaterialVideoStableW100';

export default IconMaterialVideoStableW100;
