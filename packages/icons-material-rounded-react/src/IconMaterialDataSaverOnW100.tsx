import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataSaverOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnW100'

      short_name='DataSaverOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-128 80.5-224T420-823q7-2 12 2.3t5 11.64q0 5.06-2.52 8.44-2.53 3.39-6.48 4.62-117 20-192.5 109T160-480q0 133 93.5 226.5T480-160q72 0 137.5-30T727-274q4-5 8.5-6t9.5 2q5 3 5 10t-6 14q-53 60-120 91t-144 31Zm320-348q0-118-76.5-207.5T531-796q-5-1-7.5-4.74-2.5-3.73-2.5-8.26 0-6.9 5.5-10.95Q532-824 539-823q124 19 206.5 117T828-480q0 32-5 62t-16 56q-2 6-8 8.5t-12 .5q-5-2-6.5-6.5t.5-10.5q9-29 14-57t5-53Zm-334 14H360q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOnW100.displayName = 'OnesyIconMaterialDataSaverOnW100';

export default IconMaterialDataSaverOnW100;
