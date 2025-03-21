import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupOffW100Filled'

      short_name='GroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 659-261v29H123v-52q0-26 13.5-43.5T173-356q49-23 96.5-37.5T391-408q45 0 78.5 5.5T532-388L407-513q-4 1-8 1h-8q-45 0-76.5-31.5T283-620v-8q0-4 1-8L90-830l20-20L872-88l-20 20ZM697-392q23 6 45 15.5t45 20.5q23 11 36.5 30t13.5 42v49L728-344q-6-14-13.5-26T697-392ZM549-523q14-21 22-46t8-51q0-30-10.5-57T541-728q45 0 76.5 31.5T649-620q0 41-26 70.5T559-513l-10-10Zm-57-57L351-721q10-3 19.5-5t20.5-2q45 0 76.5 31.5T499-620q0 11-2 20.5t-5 19.5Z"/>
    </Icon>
  );
});

IconMaterialGroupOffW100Filled.displayName = 'OnesyIconMaterialGroupOffW100Filled';

export default IconMaterialGroupOffW100Filled;
