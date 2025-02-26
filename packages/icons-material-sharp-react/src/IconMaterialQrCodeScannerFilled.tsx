import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCodeScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScannerFilled'

      short_name='QrCodeScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScannerFilled.displayName = 'OnesyIconMaterialQrCodeScannerFilled';

export default IconMaterialQrCodeScannerFilled;
