import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardControlKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKeyW100Filled'

      short_name='KeyboardControlKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-684 265-470q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l212-212q9-9 21-9t21 9l213 213q4 4 3.5 9.5T713-470q-4 4-9 4t-9-4L480-684Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKeyW100Filled.displayName = 'OnesyIconMaterialKeyboardControlKeyW100Filled';

export default IconMaterialKeyboardControlKeyW100Filled;
