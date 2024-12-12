import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarehouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarehouseW100Filled'

      short_name='Warehouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-473l348-139 348 139v473H640v-320H320v320H132Zm257 0v-56h56v56h-56Zm63-120v-56h56v56h-56Zm63 120v-56h56v56h-56Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100Filled.displayName = 'OnesyIconMaterialWarehouseW100Filled';

export default IconMaterialWarehouseW100Filled;
