import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpFilled'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpFilled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowUpFilled';

export default IconMaterialKeyboardDoubleArrowUpFilled;
