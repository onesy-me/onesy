import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleFilled'

      short_name='Accessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM680-80v-200H400v-320q0-33 23.5-56.5T480-680q24 0 41.5 10.5T559-636q55 66 99.5 90.5T760-520v80q-53 0-107-23t-93-55v138h200v300h-80Zm-280 0q-83 0-141.5-58.5T200-280q0-72 45.5-127T360-476v82q-35 14-57.5 44.5T280-280q0 50 35 85t85 35q39 0 69.5-22.5T514-240h82q-14 69-69 114.5T400-80Z"/>
    </Icon>
  );
});

IconMaterialAccessibleFilled.displayName = 'OnesyIconMaterialAccessibleFilled';

export default IconMaterialAccessibleFilled;
