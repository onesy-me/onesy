import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAspectRatioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioW100'

      short_name='AspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-334H600q-6 0-10 4t-4 10q0 6 4 10t10 4h104q13 0 21.5-8.5T734-336v-104q0-6-4-10t-10-4q-6 0-10 4t-4 10v106ZM254-626h106q6 0 10-4t4-10q0-6-4-10t-10-4H256q-13 0-21.5 8.5T226-624v104q0 6 4 10t10 4q6 0 10-4t4-10v-106Zm-62 414q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioW100.displayName = 'OnesyIconMaterialAspectRatioW100';

export default IconMaterialAspectRatioW100;
