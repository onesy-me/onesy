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
      <path d="M172-172h133v-133H172v133Zm161 0h133v-133H333v133Zm161 0h133v-133H494v133Zm161 0h133v-133H655v133ZM172-655h133v-133H172v133Zm0 161h133v-133H172v133Zm0 161h133v-133H172v133Zm161-322h133v-133H333v133Zm0 161h133v-133H333v133Zm0 161h133v-133H333v133Zm161-322h133v-133H494v133Zm0 161h133v-133H494v133Zm0 161h133v-133H494v133Zm161-322h133v-133H655v133Zm0 161h133v-133H655v133Zm0 161h133v-133H655v133Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100Filled.displayName = 'OnesyIconMaterialBackgroundGridSmallW100Filled';

export default IconMaterialBackgroundGridSmallW100Filled;
