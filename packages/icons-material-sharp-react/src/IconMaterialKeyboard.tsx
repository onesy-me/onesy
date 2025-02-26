import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Keyboard'

      short_name='Keyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-560h800v560H80Zm80-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z"/>
    </Icon>
  );
});

IconMaterialKeyboard.displayName = 'OnesyIconMaterialKeyboard';

export default IconMaterialKeyboard;
