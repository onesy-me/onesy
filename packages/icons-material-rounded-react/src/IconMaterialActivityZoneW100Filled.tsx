import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialActivityZoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ActivityZoneW100Filled'

      short_name='ActivityZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-172q-28 0-48-20t-20-48q0-25 15.5-43.5T226-307v-346q-23-5-38.5-23.5T172-720q0-28 20-48t48-20q25 0 43.5 15.5T307-734h346q5-23 23.5-38.5T720-788q28 0 48 20t20 48q0 25-15.5 43.5T734-653v346q23 5 38.5 23.5T788-240q0 28-20 48t-48 20q-25 0-43.5-15.5T653-226H307q-5 23-23.5 38.5T240-172Zm67-82h346q5-20 19-34t34-19v-346q-20-4-34.5-18.5T653-706H307q-5 20-19 34t-34 19v346q20 5 34 19t19 34Z"/>
    </Icon>
  );
});

IconMaterialActivityZoneW100Filled.displayName = 'OnesyIconMaterialActivityZoneW100Filled';

export default IconMaterialActivityZoneW100Filled;
