import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceW100'

      short_name='AccountBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-294v-304q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v304q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm188 0v-304q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v304q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98ZM174-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h612q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H174Zm480-122v-304q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v304q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm136-398H169q-3.75 0-6.37-2.59-2.63-2.58-2.63-6.28v-5.42q0-2.71 1.38-4.61 1.37-1.91 3.62-3.1l290-136q11.75-6 24.87-6 13.13 0 25.13 6l289 135 4 4q2 2 2 5.07v4.19q0 4.74-2.5 7.24T790-692Zm-546-28h472-472Zm0 0h472L494-824q-7-3-14-3t-14 3L244-720Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceW100.displayName = 'OnesyIconMaterialAccountBalanceW100';

export default IconMaterialAccountBalanceW100;
