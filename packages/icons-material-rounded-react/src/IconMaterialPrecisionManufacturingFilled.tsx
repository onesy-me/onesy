import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrecisionManufacturingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrecisionManufacturingFilled'

      short_name='PrecisionManufacturing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M219-120q-25 0-42.5-17.5T159-180q0-25 17.5-42.5T219-240h64L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h84q25 0 42.5 17.5T679-180q0 25-17.5 42.5T619-120H219Zm20-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Z"/>
    </Icon>
  );
});

IconMaterialPrecisionManufacturingFilled.displayName = 'OnesyIconMaterialPrecisionManufacturingFilled';

export default IconMaterialPrecisionManufacturingFilled;
