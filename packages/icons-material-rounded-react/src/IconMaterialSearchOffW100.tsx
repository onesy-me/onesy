import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffW100'

      short_name='SearchOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-280 60 60q4 4 9.5 4.5T360-220q5-5 5-10t-5-10l-60-60 60-60q4-4 4.5-9.5T360-380q-5-5-10-5t-10 5l-60 60-60-60q-4-4-9.5-4.5T200-380q-5 5-5 10t5 10l60 60-60 60q-4 4-4.5 9.5T200-220q5 5 10 5t10-5l60-60Zm0 128q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm286-262q-14 12-33.5 23T496-374q-2-7-4.5-13.5T486-399q54-20 90-67.5T612-580q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 14 2.5 28.5T236-524q-6 0-13.5 2.5L209-517q-4-13-6.5-29.5T200-580q0-92 64-156t156-64q92 0 156 64t64 156q0 43-15.5 81T586-434l240 240q4 4 4.5 9.5T826-174q-5 5-10 5t-10-5L566-414Z"/>
    </Icon>
  );
});

IconMaterialSearchOffW100.displayName = 'OnesyIconMaterialSearchOffW100';

export default IconMaterialSearchOffW100;
