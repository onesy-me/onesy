import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAspectRatioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioW100Filled'

      short_name='AspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-334H600q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h104q12.75 0 21.38-8.63Q734-323.25 734-336v-104q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v106ZM254-626h106q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H256q-12.75 0-21.37 8.62Q226-636.75 226-624v104q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106Zm-62 414q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioW100Filled.displayName = 'OnesyIconMaterialAspectRatioW100Filled';

export default IconMaterialAspectRatioW100Filled;
