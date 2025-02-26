import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-195q-13 0-25-5t-21-16L136-574q-7-8-10.5-17.5T122-612q0-7 2-13.5t5-13.5l70-142q8-15 22.5-24t31.5-9h454q17 0 31.5 9t22.5 24l70 142q3 7 5 13.5t2 13.5q0 11-3.5 20.5T824-574L526-216q-9 11-21 16t-25 5ZM343-614h274l-86-172H429l-86 172Zm123 393v-365H163l303 365Zm28 0 303-365H494v365Zm154-393h164l-77-154q-4-8-12-13t-17-5H562l86 172Zm-500 0h164l86-172H254q-9 0-17 5t-12 13l-77 154Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100.displayName = 'OnesyIconMaterialDiamondW100';

export default IconMaterialDiamondW100;
