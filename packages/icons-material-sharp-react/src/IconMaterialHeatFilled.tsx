import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatFilled'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-321q0 38 19.5 75.5T561-156l-57 52q-58-61-83.5-111T395-319q0-38 11.5-80T444-504q24-59 32.5-88.5T485-647q0-37-20.5-71T394-797l55-58q63 57 89.5 105T565-648q0 35-10 73.5T519-474q-25 60-34 92t-9 61Zm196 0q0 38 19 75.5t65 89.5l-57 51q-58-61-83-110.5T591-319q0-38 11.5-80T640-504q24-59 32.5-88.5T681-647q0-37-21-71t-71-79l55-58q63 57 90 105t27 102q0 35-10 73.5T715-474q-25 60-34 92t-9 61Zm-391 0q0 38 19.5 75.5T366-156l-57 52q-58-61-83.5-111T200-319q0-38 11.5-80T249-504q24-59 32.5-88.5T290-647q0-37-20.5-71T199-797l54-58q63 57 90 105t27 102q0 35-10 73.5T324-474q-25 60-34 92t-9 61Z"/>
    </Icon>
  );
});

IconMaterialHeatFilled.displayName = 'OnesyIconMaterialHeatFilled';

export default IconMaterialHeatFilled;
