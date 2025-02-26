import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveBackWordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveBackWordFilled'

      short_name='TextSelectMoveBackWord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320 120-480l160-160 56 56-63 64h247v80H273l63 64-56 56Zm320 200v-720h240v720H600ZM440-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120-760v-80h80v80h-80Zm0 640v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveBackWordFilled.displayName = 'OnesyIconMaterialTextSelectMoveBackWordFilled';

export default IconMaterialTextSelectMoveBackWordFilled;
