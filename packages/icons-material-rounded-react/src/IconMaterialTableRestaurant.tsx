import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRestaurant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurant'

      short_name='TableRestaurant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M173-600h614l-34-120H208l-35 120Zm307-60Zm192 140H289l-11 80h404l-10-80ZM166-205l43-315h-89q-20 0-31.5-16T82-571l57-200q4-13 14-21t24-8h606q14 0 24 8t14 21l57 200q5 19-6.5 35T840-520h-88l42 315q2 18-9.5 31.5T755-160q-15 0-26.5-9.5T715-194l-22-166H267l-22 166q-2 15-13.5 24.5T205-160q-18 0-29.5-13.5T166-205Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurant.displayName = 'OnesyIconMaterialTableRestaurant';

export default IconMaterialTableRestaurant;
