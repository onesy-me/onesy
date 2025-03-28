import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropW100Filled'

      short_name='WaterDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M488-216q8-1 12-5t4-10q0-7-5-10.5t-12-2.5q-41 3-93-26.5T330-367q-2-9-5.5-13t-9.5-4q-6 0-10.5 4.5T302-364q15 81 76 116t110 32Zm-8 84q-115 0-191.5-79T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 118-76.5 197T480-132Z"/>
    </Icon>
  );
});

IconMaterialWaterDropW100Filled.displayName = 'OnesyIconMaterialWaterDropW100Filled';

export default IconMaterialWaterDropW100Filled;
