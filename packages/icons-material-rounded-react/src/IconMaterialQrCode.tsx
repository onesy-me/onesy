import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode'

      short_name='QrCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-560v-240q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v240q0 17-11.5 28.5T400-520H160q-17 0-28.5-11.5T120-560Zm80-40h160v-160H200v160Zm-80 440v-240q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-40h160v-160H200v160Zm320-360v-240q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520H560q-17 0-28.5-11.5T520-560Zm80-40h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialQrCode.displayName = 'OnesyIconMaterialQrCode';

export default IconMaterialQrCode;
