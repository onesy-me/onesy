import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCode2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2'

      short_name='QrCode2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-80h80v80h-80Zm-80-80v-200h80v200h-80Zm320-120v-160h80v160h-80Zm-80-160v-80h80v80h-80Zm-480 80v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm-60 20v-160q0-17 11.5-28.5T160-840h160q17 0 28.5 11.5T360-800v160q0 17-11.5 28.5T320-600H160q-17 0-28.5-11.5T120-640Zm60 460h120v-120H180v120Zm-60 20v-160q0-17 11.5-28.5T160-360h160q17 0 28.5 11.5T360-320v160q0 17-11.5 28.5T320-120H160q-17 0-28.5-11.5T120-160Zm540-500h120v-120H660v120Zm-60 20v-160q0-17 11.5-28.5T640-840h160q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H640q-17 0-28.5-11.5T600-640Zm80 520v-120h-80v-80h160v120h80v80H680ZM520-400v-80h160v80H520Zm-160 0v-80h-80v-80h240v80h-80v80h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterialQrCode2.displayName = 'OnesyIconMaterialQrCode2';

export default IconMaterialQrCode2;
