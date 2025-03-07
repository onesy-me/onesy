import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataTable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTable'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-507h560v-133H200v133Zm0 214h560v-134H200v134Zm0 213h560v-133H200v133Zm80-454q-17 0-28.5-11.5T240-694q0-17 11.5-28.5T280-734q17 0 28.5 11.5T320-694q0 17-11.5 28.5T280-654Zm0 214q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm0 214q-17 0-28.5-11.5T240-266q0-17 11.5-28.5T280-306q17 0 28.5 11.5T320-266q0 17-11.5 28.5T280-226Z"/>
    </Icon>
  );
});

IconMaterialDataTable.displayName = 'OnesyIconMaterialDataTable';

export default IconMaterialDataTable;
