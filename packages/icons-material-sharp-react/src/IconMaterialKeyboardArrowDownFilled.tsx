import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownFilled'

      short_name='KeyboardArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownFilled.displayName = 'OnesyIconMaterialKeyboardArrowDownFilled';

export default IconMaterialKeyboardArrowDownFilled;
