import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDownW100Filled'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-238 276-442l20-20 184 184 184-184 20 20-204 204Zm0-238L276-680l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDownW100Filled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowDownW100Filled';

export default IconMaterialKeyboardDoubleArrowDownW100Filled;
