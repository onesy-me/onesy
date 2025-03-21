import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffW100Filled'

      short_name='LinkOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m604-468-26-26h20q6 0 10 4t4 10q0 4-2 7t-6 5Zm234 366q-5 5-10 5t-10-5L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102ZM284-328q-63 0-107.5-44.5T132-480q0-63 44.5-107.5T284-632h24l28 28h-52q-51 0-87.5 36.5T160-480q0 51 36.5 87.5T284-356h124q6 0 10 4t4 10q0 6-4 10t-10 4H284Zm78-138q-6 0-10-4t-4-10q0-6 4-10t10-4h84l27 28H362Zm361 118q-3-5-1-11t8-8q32-15 51-45.5t19-67.5q0-51-36-87.5T678-604H552q-6 0-10-4t-4-10q0-6 4-10t10-4h126q62 0 106 44.5T828-480q0 45-24 81.5T742-342q-5 3-10.5 1t-8.5-7Z"/>
    </Icon>
  );
});

IconMaterialLinkOffW100Filled.displayName = 'OnesyIconMaterialLinkOffW100Filled';

export default IconMaterialLinkOffW100Filled;
