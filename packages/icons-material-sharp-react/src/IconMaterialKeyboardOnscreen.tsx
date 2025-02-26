import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOnscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreen'

      short_name='KeyboardOnscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-80H320v80ZM200-400h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM80-160v-640h800v640H80Zm80-440h640v-120H160v120Zm0 360h640v-280H160v280Zm0 0v-280 280Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreen.displayName = 'OnesyIconMaterialKeyboardOnscreen';

export default IconMaterialKeyboardOnscreen;
