import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardHideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideFilled'

      short_name='KeyboardHide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 320-200h320L480-40ZM80-280v-560h800v560H80Zm240-120h320v-80H320v80ZM200-520h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-640h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideFilled.displayName = 'OnesyIconMaterialKeyboardHideFilled';

export default IconMaterialKeyboardHideFilled;
