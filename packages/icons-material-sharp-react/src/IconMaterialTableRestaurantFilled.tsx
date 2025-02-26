import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRestaurantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantFilled'

      short_name='TableRestaurant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-520H289l-11 80h404l-10-80ZM160-160l49-360H67l80-280h666l80 280H752l48 360h-80l-27-200H267l-27 200h-80Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantFilled.displayName = 'OnesyIconMaterialTableRestaurantFilled';

export default IconMaterialTableRestaurantFilled;
