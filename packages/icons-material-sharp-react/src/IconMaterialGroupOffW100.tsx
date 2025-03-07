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
      <path d="M852-68 659-261v29H123v-52q0-26 13.5-43.5t36.45-28.59Q222-379 269.5-393.5 317-408 391-408q45 0 78.5 5.5T532-388L407-513q-4 1-8 1h-8q-44.55 0-76.27-31.72Q283-575.45 283-620v-8q0-4 1-8L90-830l20-20L872-88l-20 20ZM697-392q23 6 45 15.5t45 20.5q23 11 36.5 30.16T837-284v49L728-344q-6-14-13.5-26T697-392Zm-306 12q-66 0-114 12.5T187-332q-21 11-28.5 22t-7.5 26v24h480v-29l-51-51q-39-20-84-30t-105-10Zm158-143q14-21 22-46t8-51q0-30-10.5-57T541-728q44.55 0 76.28 31.72Q649-664.55 649-620q0 41.25-26 70.62Q597-520 559-513l-10-10Zm-57-57-23-23q1-4 1.5-8t.5-9q0-33-23.5-56.5T391-700q-5 0-9 .5t-8 1.5l-23-23q10-3 19.62-5 9.63-2 20.38-2 44.55 0 76.27 31.72Q499-664.55 499-620q0 10.75-2 20.38-2 9.62-5 19.62ZM381-260Zm42-392Z"/>
    </Icon>
  );
});

IconMaterialGroupOffW100.displayName = 'OnesyIconMaterialGroupOffW100';

export default IconMaterialGroupOffW100;
