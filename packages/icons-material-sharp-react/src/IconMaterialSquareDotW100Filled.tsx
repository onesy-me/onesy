import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareDotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareDotW100Filled'

      short_name='SquareDot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm279.87-119Q413-319 366-366.13t-47-114Q319-547 366.13-594t114-47Q547-641 594-593.87t47 114Q641-413 593.87-366t-114 47Z"/>
    </Icon>
  );
});

IconMaterialSquareDotW100Filled.displayName = 'OnesyIconMaterialSquareDotW100Filled';

export default IconMaterialSquareDotW100Filled;
