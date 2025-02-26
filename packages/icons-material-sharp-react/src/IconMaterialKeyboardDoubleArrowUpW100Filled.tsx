import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpW100Filled'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-260-20-20 204-204 204 204-20 20-184-184-184 184Zm0-240-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpW100Filled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowUpW100Filled';

export default IconMaterialKeyboardDoubleArrowUpW100Filled;
