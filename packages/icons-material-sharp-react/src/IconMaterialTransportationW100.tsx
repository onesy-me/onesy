import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransportationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransportationW100'

      short_name='Transportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M726-306q-68-2-116.5-44.5T552-466H430l-17-28h139q3-35 25-74.5t59-59.5H337l-17-28h326l-77-210H452v-28h137l87 238h50q75 0 124.5 50.5T900-480q0 72.21-50.9 123.1Q798.21-306 726-306Zm.12-28q60.88 0 103.38-42.58Q872-419.17 872-480q0-63-41.5-105.5T726-628q-12 0-22 2t-18 4l42 112-26 10-40-112q-38 18-60 56t-22 76q0 60.83 42.62 103.42Q665.24-334 726.12-334Zm-406 270Q281-64 253.5-91.42 226-118.83 226-158q0-8 1-14t3-14H66v-28h178.02Q258-232 278-242q20-10 42.19-10 19.81 0 39.81 8.5 20 8.5 36 29.5h124v-106H66v-28h80v-146H66v-28h239l100 174h143v162H410q2 8 3 14t1 14q0 39.17-27.38 66.58Q359.24-64 320.12-64ZM174-348h199l-83-146H174v146ZM320-92q27 0 46.5-19.5T386-158q0-27-19.5-46.5T320-224q-27 0-46.5 19.5T254-158q0 27 19.5 46.5T320-92Zm-27-175Z"/>
    </Icon>
  );
});

IconMaterialTransportationW100.displayName = 'OnesyIconMaterialTransportationW100';

export default IconMaterialTransportationW100;
