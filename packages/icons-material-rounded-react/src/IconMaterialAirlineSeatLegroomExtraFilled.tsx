import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomExtraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraFilled'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280H160q-33 0-56.5-23.5T80-360v-440q0-17 11.5-28.5T120-840q17 0 28.5 11.5T160-800v440h320q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm120-120H340q-50 0-85-35t-35-85v-280q0-17 11.5-28.5T260-840h160q17 0 28.5 11.5T460-800v200h120q23 0 42 12.5t30 33.5l136 278 44-20q23-11 46.5-3.5T914-270q12 23 3.5 47T886-188l-115 52q-15 7-30 1t-22-20L600-400Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraFilled.displayName = 'OnesyIconMaterialAirlineSeatLegroomExtraFilled';

export default IconMaterialAirlineSeatLegroomExtraFilled;
