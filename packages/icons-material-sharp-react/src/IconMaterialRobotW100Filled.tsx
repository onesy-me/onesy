import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRobotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RobotW100Filled'

      short_name='Robot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-506q23 0 38.5-15.5T414-560q0-23-15.5-38.5T360-614q-23 0-38.5 15.5T306-560q0 23 15.5 38.5T360-506Zm240 0q23 0 38.5-15.5T654-560q0-23-15.5-38.5T600-614q-23 0-38.5 15.5T546-560q0 23 15.5 38.5T600-506ZM334-172v-102q0-14 9-23t23-9h100v134H334Zm160 0v-134h100q14 0 23 9t9 23v102H494Zm-262 0q-24.75 0-42.37-17.63Q172-207.25 172-232v-368q0-78.33 54.83-133.17Q281.67-788 360-788h240q78.33 0 133.17 54.83Q788-678.33 788-600v368q0 24.75-17.62 42.37Q752.75-172 728-172h-74v-102q0-24.75-17.62-42.38Q618.75-334 594-334H366q-24.75 0-42.37 17.62Q306-298.75 306-274v102h-74Z"/>
    </Icon>
  );
});

IconMaterialRobotW100Filled.displayName = 'OnesyIconMaterialRobotW100Filled';

export default IconMaterialRobotW100Filled;
