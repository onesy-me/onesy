import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundGridSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallW100Filled'

      short_name='BackgroundGridSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172h73v-133H172v73q0 24.75 17.63 42.37Q207.25-172 232-172Zm101 0h133v-133H333v133Zm161 0h133v-133H494v133Zm161 0h73q24.75 0 42.38-17.63Q788-207.25 788-232v-73H655v133ZM172-655h133v-133h-73q-24.75 0-42.37 17.62Q172-752.75 172-728v73Zm0 161h133v-133H172v133Zm0 161h133v-133H172v133Zm161-322h133v-133H333v133Zm0 161h133v-133H333v133Zm0 161h133v-133H333v133Zm161-322h133v-133H494v133Zm0 161h133v-133H494v133Zm0 161h133v-133H494v133Zm161-322h133v-73q0-24.75-17.62-42.38Q752.75-788 728-788h-73v133Zm0 161h133v-133H655v133Zm0 161h133v-133H655v133Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100Filled.displayName = 'OnesyIconMaterialBackgroundGridSmallW100Filled';

export default IconMaterialBackgroundGridSmallW100Filled;
