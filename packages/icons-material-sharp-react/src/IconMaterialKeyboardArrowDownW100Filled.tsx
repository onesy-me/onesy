import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownW100Filled'

      short_name='KeyboardArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownW100Filled.displayName = 'OnesyIconMaterialKeyboardArrowDownW100Filled';

export default IconMaterialKeyboardArrowDownW100Filled;
