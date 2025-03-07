import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagicExchange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicExchange'

      short_name='MagicExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m418 638-118-53q-6-3-6-9t6-9l118-54 53-117q3-6 9-6t9 6l54 117 117 54q6 3 6 9t-6 9l-117 53-54 118q-3 6-9 6t-9-6l-53-118Zm62 378q-112 0-206-51T120 829v67q0 17-11.5 28.5T80 936q-17 0-28.5-11.5T40 896V736q0-17 11.5-28.5T80 696h160q17 0 28.5 11.5T280 736q0 17-11.5 28.5T240 776h-59q48 72 126.5 116T480 936q141 0 242.5-94T838 611q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5q-7 85-44 158.5t-96 128q-59 54.5-135.5 86T480 1016Zm0-800q-141 0-242.5 94T122 541q-2 16-14 25.5T80 576q-17 0-29-10.5T41 540q7-85 44-158.5t96-128q59-54.5 135.5-86T480 136q112 0 206 51t154 136v-67q0-17 11.5-28.5T880 216q17 0 28.5 11.5T920 256v160q0 17-11.5 28.5T880 456H720q-17 0-28.5-11.5T680 416q0-17 11.5-28.5T720 376h59q-48-72-126.5-116T480 216Z"/>
    </Icon>
  );
});

IconMaterialMagicExchange.displayName = 'OnesyIconMaterialMagicExchange';

export default IconMaterialMagicExchange;
