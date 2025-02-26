import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpW100Filled'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m342-426 138-138 138 138H342Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpW100Filled.displayName = 'OnesyIconMaterialArrowDropUpW100Filled';

export default IconMaterialArrowDropUpW100Filled;
