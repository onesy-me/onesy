import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDropW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropW100'

      short_name='WaterDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M488-216q8-1 12-5.15t4-10.01q0-6.84-4.78-10.34T487-244q-41 3-93-26.5T330-367q-2-9-5.5-13t-9.5-4q-6 0-10.5 4.5T302-364q15 81 76 116t110 32Zm-8.18 84Q365-132 288.5-211.1T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 117.8-76.68 196.9-76.69 79.1-191.5 79.1Zm.18-28q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-312Z"/>
    </Icon>
  );
});

IconMaterialWaterDropW100.displayName = 'OnesyIconMaterialWaterDropW100';

export default IconMaterialWaterDropW100;
