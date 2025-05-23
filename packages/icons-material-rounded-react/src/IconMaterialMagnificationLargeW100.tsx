import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeW100'

      short_name='MagnificationLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-386h368q13 0 21.5-8.5T654-416v-208q0-13-8.5-21.5T624-654H256q-13 0-21.5 8.5T226-624v208q0 13 8.5 21.5T256-386Zm-64 174q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeW100.displayName = 'OnesyIconMaterialMagnificationLargeW100';

export default IconMaterialMagnificationLargeW100;
