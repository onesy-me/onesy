import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepPublicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicW100Filled'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M209-372q-6 0-10.5-4.5T194-387v-7q0-3 1-5.5t3-4.5l54-54v-302h-26q-6 0-10-4t-4-10q0-6 4-10t10-4h182q11 0 15.5 9.5T423-760q-15 28-23 58t-8 62q0 63 28.5 116t79.5 88q11 6 18.5 15t7.5 21q0 11-8.5 19.5T498-372H374v176q0 6-2 11t-7 10q-2 2-5 2t-5-2q-5-5-7-10t-2-11v-176H209Zm431-416q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm0 28q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760Zm0 160q-21 0-41.5 4.5T558-582q-7 3-8.5 10.5T553-558q17 18 39.5 28t47.5 10q25 0 47.5-10t39.5-28q5-5 3.5-12.5T722-582q-20-9-40.5-13.5T640-600Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicW100Filled.displayName = 'OnesyIconMaterialKeepPublicW100Filled';

export default IconMaterialKeepPublicW100Filled;
