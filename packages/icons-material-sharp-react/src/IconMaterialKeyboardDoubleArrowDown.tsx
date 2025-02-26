import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDown'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDown.displayName = 'OnesyIconMaterialKeyboardDoubleArrowDown';

export default IconMaterialKeyboardDoubleArrowDown;
