import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiW100'

      short_name='CellWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-132q-20 0-27.5-18.5T417-183l360-362q14-14 32.5-6t18.5 28v361q0 13-8.5 21.5T798-132H438Zm282-28h80v-368l-80 80v288ZM442-446q-17 0-28.5-11.5T402-486q0-17 11.5-28.5T442-526q17 0 28.5 11.5T482-486q0 17-11.5 28.5T442-446Zm2-170q-29 0-60 9.5T326-577q-5 4-11 4t-11-5q-4-4-3.5-9.5t5.5-9.5q32-23 68-35t70-12q34 0 68.5 11t64.5 33q5 4 6.5 10t-3.5 11q-5 5-11 5t-11-4q-26-19-56-28.5t-58-9.5Zm0-144q-57 0-114.5 20T224-682q-5 4-11 4.5t-11-4.5q-5-5-3.5-10.5T205-703q53-44 114-64.5T444-788q64 0 124.5 20.5T681-703q5 5 6.5 10.5T684-682q-5 5-11 4.5t-11-4.5q-48-38-104.5-58T444-760Z"/>
    </Icon>
  );
});

IconMaterialCellWifiW100.displayName = 'OnesyIconMaterialCellWifiW100';

export default IconMaterialCellWifiW100;
