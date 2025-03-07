import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaucetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetW100'

      short_name='Faucet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-416h182v-59q0-13-9-22t-22-9h-71q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h71q25 0 42 17t17 42v59h110v-276q0-57.22 39.58-96.61Q545.17-828 602.07-828 640-828 673-808q33 20 50 55l27 55q2 5 .5 10t-6.5 8q-5 3-10.56 1.1-5.57-1.91-8.44-7.1l-28-55q-14.12-26.93-39.8-42.97Q631.53-800 602-800q-45 0-76.5 31.5T494-692v276h110v-59q0-25 17-42t42-17h71q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-71q-13 0-22 9t-9 22v59h182q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm125 244q-25 0-42-17t-17-42v-157h28v157q0 13 9 22t22 9h418q13 0 22-9t9-22v-157h28v162q0 23-15.57 38.5T695-172H271Z"/>
    </Icon>
  );
});

IconMaterialFaucetW100.displayName = 'OnesyIconMaterialFaucetW100';

export default IconMaterialFaucetW100;
