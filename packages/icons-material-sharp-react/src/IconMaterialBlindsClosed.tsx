import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsClosed'

      short_name='BlindsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-50q-29 0-49.5-20.5T530-120H80v-80h80v-640h640v640h80v80H670q0 29-20.5 49.5T600-50ZM240-680h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-520h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-360h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-200h320v-80H240v80Zm400 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosed.displayName = 'OnesyIconMaterialBlindsClosed';

export default IconMaterialBlindsClosed;
