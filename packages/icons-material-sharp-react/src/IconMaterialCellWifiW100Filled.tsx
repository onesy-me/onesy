import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiW100Filled'

      short_name='CellWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m366-132 462-464v464H366Zm354-28h80v-368l-80 80v288ZM442-446q-17 0-28.5-11.5T402-486q0-17 11.5-28.5T442-526q17 0 28.5 11.5T482-486q0 17-11.5 28.5T442-446ZM314-568l-20-20q33-27 72.5-41.5T444-644q38 0 76 13.5t70 40.5l-20 22q-27-24-60.5-36T444-616q-32 0-66.5 12T314-568ZM212-672l-20-20q54-50 119-73t133-23q68 0 132 23t118 73l-20 20q-50-42-110-65t-120-23q-60 0-121 23t-111 65Z"/>
    </Icon>
  );
});

IconMaterialCellWifiW100Filled.displayName = 'OnesyIconMaterialCellWifiW100Filled';

export default IconMaterialCellWifiW100Filled;
