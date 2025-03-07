import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundGridSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallW100'

      short_name='BackgroundGridSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h119v-119H200v119Zm147 0h119v-119H347v119Zm147 0h119v-119H494v119Zm147 0h119v-119H641v119ZM200-641h119v-119H200v119Zm0 147h119v-119H200v119Zm0 147h119v-119H200v119Zm147-294h119v-119H347v119Zm0 147h119v-119H347v119Zm0 147h119v-119H347v119Zm147-294h119v-119H494v119Zm0 147h119v-119H494v119Zm0 147h119v-119H494v119Zm147-294h119v-119H641v119Zm0 147h119v-119H641v119Zm0 147h119v-119H641v119ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100.displayName = 'OnesyIconMaterialBackgroundGridSmallW100';

export default IconMaterialBackgroundGridSmallW100;
