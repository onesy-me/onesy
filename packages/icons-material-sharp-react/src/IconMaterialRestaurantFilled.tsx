import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestaurantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantFilled'

      short_name='Restaurant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/>
    </Icon>
  );
});

IconMaterialRestaurantFilled.displayName = 'OnesyIconMaterialRestaurantFilled';

export default IconMaterialRestaurantFilled;
