import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpiPay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpiPay'

      short_name='UpiPay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360h60v-80h140v-160H440v240Zm240 0h60v-240h-60v240ZM500-500v-40h80v40h-80ZM200-360h200v-240h-60v180h-80v-180h-60v240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialUpiPay.displayName = 'OnesyIconMaterialUpiPay';

export default IconMaterialUpiPay;
