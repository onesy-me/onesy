import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassW100Filled'

      short_name='HotelClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m606-400 135-117 39 4-142 122 42 186-33-20-41-175Zm-71-219-38-90 15-38 55 131-32-3ZM251-228l45-192-149-129 196-17 77-181 77 181 196 17-149 129 45 192-169-102-169 102Z"/>
    </Icon>
  );
});

IconMaterialHotelClassW100Filled.displayName = 'OnesyIconMaterialHotelClassW100Filled';

export default IconMaterialHotelClassW100Filled;
