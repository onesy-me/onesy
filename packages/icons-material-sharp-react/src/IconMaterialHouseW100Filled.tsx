import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100Filled'

      short_name='House'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-212v-361l-127 94-17-22 388-287 178 131v-91h62v137l149 110-17 22-127-94v361H550v-200H410v200H236Zm174-348h140q0-27-21-44.5T480-622q-28 0-49 17.41T410-560Z"/>
    </Icon>
  );
});

IconMaterialHouseW100Filled.displayName = 'OnesyIconMaterialHouseW100Filled';

export default IconMaterialHouseW100Filled;
