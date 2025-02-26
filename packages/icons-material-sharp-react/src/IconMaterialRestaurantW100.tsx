import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestaurantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantW100'

      short_name='Restaurant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-106v-360q-45-5-76.5-38.5T198-588v-266h28v266h80v-266h28v266h80v-266h28v266q0 50-31.5 83.5T334-466v360h-28Zm360 0v-320h-92v-254q0-62 31.5-111.5T694-852v746h-28Z"/>
    </Icon>
  );
});

IconMaterialRestaurantW100.displayName = 'OnesyIconMaterialRestaurantW100';

export default IconMaterialRestaurantW100;
