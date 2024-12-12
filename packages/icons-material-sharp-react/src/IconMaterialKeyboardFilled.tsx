import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFilled'

      short_name='Keyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-560h800v560H80Zm240-120h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFilled.displayName = 'OnesyIconMaterialKeyboardFilled';

export default IconMaterialKeyboardFilled;
