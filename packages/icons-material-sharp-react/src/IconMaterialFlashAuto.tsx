import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAuto'

      short_name='FlashAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-336 128-184H294l80-280H160v320h120v144ZM200-80v-320H80v-480h400l-80 280h160L200-80Zm80-400H160h120Zm305-40 135-360h64l137 360h-62l-32-92H679l-32 92h-62Zm112-144h110l-53-150h-2l-55 150Z"/>
    </Icon>
  );
});

IconMaterialFlashAuto.displayName = 'OnesyIconMaterialFlashAuto';

export default IconMaterialFlashAuto;
