import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpW100Filled'

      short_name='KeyboardArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-564 296-380l-20-20 204-204 204 204-20 20-184-184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpW100Filled.displayName = 'OnesyIconMaterialKeyboardArrowUpW100Filled';

export default IconMaterialKeyboardArrowUpW100Filled;
