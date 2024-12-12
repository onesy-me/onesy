import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoFilled'

      short_name='FlashAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-320H80v-480h400l-80 280h160L200-80Zm385-440 135-360h64l137 360h-62l-32-92H679l-32 92h-62Zm112-144h110l-53-150h-2l-55 150Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoFilled.displayName = 'OnesyIconMaterialFlashAutoFilled';

export default IconMaterialFlashAutoFilled;
