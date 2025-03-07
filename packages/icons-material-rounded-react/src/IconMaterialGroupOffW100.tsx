import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupOffW100'

      short_name='GroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 654-267h5v5q0 13-8.5 21.5T629-232H153q-13 0-21.5-8.5T123-262v-22q0-26 13.5-43.5T173-356q49-23 96.5-37.5T391-408q45 0 78.5 5.5T532-388L407-513q-4 1-8 1h-8q-45 0-76.5-31.5T283-620v-8q0-4 1-8L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM697-392q23 6 45 15.5t45 20.5q23 11 36.5 30t13.5 42v49L728-344q-6-14-13.5-26T697-392Zm-306 12q-66 0-114 12.5T187-332q-21 11-28.5 22t-7.5 26v24h480v-29l-51-51q-39-20-84-30t-105-10Zm158-143q14-21 22-46t8-51q0-30-10.5-57T541-728q45 0 76.5 31.5T649-620q0 41-26 70.5T559-513l-10-10Zm-57-57-23-23q1-4 1.5-8t.5-9q0-33-23.5-56.5T391-700q-5 0-9 .5t-8 1.5l-23-23q10-3 19.5-5t20.5-2q45 0 76.5 31.5T499-620q0 11-2 20.5t-5 19.5ZM381-260Zm42-392Z"/>
    </Icon>
  );
});

IconMaterialGroupOffW100.displayName = 'OnesyIconMaterialGroupOffW100';

export default IconMaterialGroupOffW100;
