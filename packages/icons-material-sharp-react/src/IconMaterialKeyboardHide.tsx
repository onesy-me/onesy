import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardHide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHide'

      short_name='KeyboardHide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 320-200h320L480-40ZM80-280v-560h800v560H80Zm80-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-520h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-640h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHide.displayName = 'OnesyIconMaterialKeyboardHide';

export default IconMaterialKeyboardHide;
