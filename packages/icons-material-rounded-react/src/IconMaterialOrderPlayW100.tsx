import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrderPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlayW100'

      short_name='OrderPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m701-177 70-44q7-5 7-13t-7-13l-70-44q-8-5-15.5-.5T678-278v88q0 9 7.5 13.5t15.5-.5ZM294-614h372q6 0 10-4t4-10q0-6-23.5-10l-23.5-4H294q-6 0-10 4t-4 10q0 6 4 10t10 4ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Zm-548-59v-583q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v229q-7-2-13.5-3.5T760-505v-223q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v530h257q2 12 4.5 24t7.5 23l-41-25-44 27q-4 2-8 2t-8-2l-44-27-44 27q-4 2-8 2t-8-2l-45-27-38 27q-3 2-9 4Zm122-173h170q2-8 4.5-14.5T474-346H294q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-148h281q14-9 28-16t30-12H294q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-94 268v-562 562Z"/>
    </Icon>
  );
});

IconMaterialOrderPlayW100.displayName = 'OnesyIconMaterialOrderPlayW100';

export default IconMaterialOrderPlayW100;
