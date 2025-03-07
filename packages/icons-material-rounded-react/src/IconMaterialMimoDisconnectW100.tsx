import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMimoDisconnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectW100'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-788 28 28h-28q-12 0-22 10t-10 22v412q0 14 9 23t23 9h466L94-846q-5-3.67-5-9.33Q89-861 94-866t10-5q5 0 10 5l714 714q4 3.91 4 9.96 0 6.04-4 10.04-5 5-10.67 5-5.66 0-9.33-5L688-256h-58l19 19q5 5 7 10.22 2 5.21 2 10.78v14q0 12.75-8.53 21.37-8.53 8.63-21.14 8.63H331.61q-12.61 0-21.11-8.63-8.5-8.62-8.5-21.37v-14q0-5.57 2-10.78 2-5.22 7-10.22l19-19H192q-26 0-43-17t-17-43v-412q0-26 17-43t43-17Zm576 0q12.93 0 23.97 4.5Q803-779 811-771q8 8 12.5 19.03Q828-740.93 828-728v436q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-436q0-14-9-23t-23-9H336q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T336-788h432ZM567-527Zm-166-12Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectW100.displayName = 'OnesyIconMaterialMimoDisconnectW100';

export default IconMaterialMimoDisconnectW100;
