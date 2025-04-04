import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallReceivedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedW100'

      short_name='CallReceived'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-252q-12.75 0-21.37-8.63Q252-269.25 252-282v-304q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v286l438-438q4-4 9.5-4.5T738-738q5 5 5 10t-5 10L300-280h286q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H282Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedW100.displayName = 'OnesyIconMaterialCallReceivedW100';

export default IconMaterialCallReceivedW100;
