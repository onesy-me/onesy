import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMimoDisconnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectW100Filled'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-788-10 30-88-88q-4-4-4.5-9.5T94-866q5-5 10-5t10 5l714 714q4 4 4.5 9.5T828-132q-5 5-10 5t-10-5L684-256h-54l19 19q5 5 7 10t2 11v14q0 13-8.5 21.5T628-172H332q-13 0-21.5-8.5T302-202v-14q0-6 2-11t7-10l19-19H192q-26 0-43-17t-17-43v-412q0-26 17-43t43-17Zm576 0q26 0 43 17t17 43v391q0 20-18.5 27.5T777-316L354-737q-14-14-6.5-32.5T375-788h393Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectW100Filled.displayName = 'OnesyIconMaterialMimoDisconnectW100Filled';

export default IconMaterialMimoDisconnectW100Filled;
