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
      <path d="M132-232v-372q0-19 10.5-34t27.5-22l288-115q11-5 22-5t22 5l288 115q17 7 27.5 22t10.5 34v372q0 25-17.5 42.5T768-172H640v-288q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v288H192q-25 0-42.5-17.5T132-232Zm257 60v-56h56v56h-56Zm63-120v-56h56v56h-56Zm63 120v-56h56v56h-56Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100Filled.displayName = 'OnesyIconMaterialWarehouseW100Filled';

export default IconMaterialWarehouseW100Filled;
