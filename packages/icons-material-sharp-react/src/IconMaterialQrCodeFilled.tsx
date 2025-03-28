import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeFilled'

      short_name='QrCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h320v320H120Zm80-80h160v-160H200v160Zm-80 480v-320h320v320H120Zm80-80h160v-160H200v160Zm320-320v-320h320v320H520Zm80-80h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialQrCodeFilled.displayName = 'OnesyIconMaterialQrCodeFilled';

export default IconMaterialQrCodeFilled;
