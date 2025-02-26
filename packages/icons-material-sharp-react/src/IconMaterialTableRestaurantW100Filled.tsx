import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRestaurantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantW100Filled'

      short_name='TableRestaurant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M683-562H277l-15 118h437l-16-118ZM203-211l47-351H124l57-196h599l58 196H710l47 351h-27l-28-205H258l-28 205h-27Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantW100Filled.displayName = 'OnesyIconMaterialTableRestaurantW100Filled';

export default IconMaterialTableRestaurantW100Filled;
