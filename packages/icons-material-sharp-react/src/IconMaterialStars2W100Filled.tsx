import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStars2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stars2W100Filled'

      short_name='Stars2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m265-172 57-242-190-164 250-21 98-229 99 229 250 21-190 164 57 242-216-129-215 129Zm434-505 17-71-57-48 75-6 29-67 29 67 75 6-57 48 17 71-64-38-64 38Z"/>
    </Icon>
  );
});

IconMaterialStars2W100Filled.displayName = 'OnesyIconMaterialStars2W100Filled';

export default IconMaterialStars2W100Filled;
