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
      <path d="M280-152q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm536-12L566-414q-14 12-33.5 23T496-374q-2-7-4.5-13.5T486-399q54-20 90-67.5T612-580q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 14 2.5 28.5T236-524q-6 0-13.5 2.5L209-517q-4-13-6.5-29.5T200-580q0-92 64-156t156-64q92 0 156 64t64 156q0 43-15.5 81T586-434l250 250-20 20Zm-606-46 70-70 70 70 20-20-70-70 70-70-20-20-70 70-70-70-20 20 70 70-70 70 20 20Z"/>
    </Icon>
  );
});

IconMaterialSearchOffW100.displayName = 'OnesyIconMaterialSearchOffW100';

export default IconMaterialSearchOffW100;
