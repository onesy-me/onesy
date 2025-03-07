import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarehouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Warehouse'

      short_name='Warehouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-754 160-626v426h80v-240q0-33 23.5-56.5T320-520h320q33 0 56.5 23.5T720-440v240h80v-426L480-754ZM80-200v-426q0-25 13.5-45t36.5-29l320-128q14-6 30-6t30 6l320 128q23 9 36.5 29t13.5 45v426q0 33-23.5 56.5T800-120H640v-320H320v320H160q-33 0-56.5-23.5T80-200Zm280 80v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM320-520h320-320Z"/>
    </Icon>
  );
});

IconMaterialWarehouse.displayName = 'OnesyIconMaterialWarehouse';

export default IconMaterialWarehouse;
