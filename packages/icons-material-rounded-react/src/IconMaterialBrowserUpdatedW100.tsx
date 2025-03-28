import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowserUpdatedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedW100'

      short_name='BrowserUpdated'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-256q-26 0-43-17t-17-43v-412q0-26 17-43t43-17h297q6 0 10 4t4 10q0 6-4 10t-10 4H192q-12 0-22 10t-10 22v412q0 12 10 22t22 10h576q12 0 22-10t10-22v-110q0-6 4-10t10-4q6 0 10 4t4 10v110q0 26-17 43t-43 17H630l19 19q5 5 7 10t2 11v14q0 13-8.5 21.5T628-172H332q-13 0-21.5-8.5T302-202v-14q0-6 2-11t7-10l19-19H192Zm431-194v-324q0-6 4-10t10-4q6 0 10 4t4 10v324l119-120q4-5 9.5-5t10.5 5q5 5 5 10t-5 10L637-397 484-550q-4-4-4.5-9.5T484-570q5-5 10-5t10 5l119 120Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedW100.displayName = 'OnesyIconMaterialBrowserUpdatedW100';

export default IconMaterialBrowserUpdatedW100;
