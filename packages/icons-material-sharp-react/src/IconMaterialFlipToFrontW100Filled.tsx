import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontW100Filled'

      short_name='FlipToFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-316v-472h472v472H316Zm28-28h416v-416H344v416ZM172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 432v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontW100Filled.displayName = 'OnesyIconMaterialFlipToFrontW100Filled';

export default IconMaterialFlipToFrontW100Filled;
