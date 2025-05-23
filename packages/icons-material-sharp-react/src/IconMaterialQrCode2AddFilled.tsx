import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCode2AddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2AddFilled'

      short_name='QrCode2Add'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm-60 60v-240h240v240H120Zm60 420h120v-120H180v120Zm-60 60v-240h240v240H120Zm540-540h120v-120H660v120Zm-60 60v-240h240v240H600ZM360-400v-80h-80v-80h160v160h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Zm-50 570v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z"/>
    </Icon>
  );
});

IconMaterialQrCode2AddFilled.displayName = 'OnesyIconMaterialQrCode2AddFilled';

export default IconMaterialQrCode2AddFilled;
